import React, { useState } from 'react';
import { Badge, Calendar, Modal, Button, Form, Input, Select, List } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const CalendarPage = () => {
  const [events, setEvents] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form] = Form.useForm();

  const openModal = (event = null) => {
    if (event) {
      form.setFieldsValue({
        ...event.data,
        date: event.date,
      });
      setEditing(event);
    } else {
      form.resetFields();
      setEditing(null);
    }
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      const date = values.date;
      const newEvent = { type: values.type, content: values.content };

      setEvents(prev => {
        const existing = prev[date] || [];
        if (editing) {
          const updated = existing.map((ev, idx) =>
            idx === editing.index && date === editing.date ? newEvent : ev
          );
          return { ...prev, [date]: updated };
        } else {
          return { ...prev, [date]: [...existing, newEvent] };
        }
      });

      setIsModalOpen(false);
      form.resetFields();
    });
  };

  const handleDelete = (date, index) => {
    setEvents(prev => {
      const filtered = prev[date].filter((_, i) => i !== index);
      const updated = { ...prev, [date]: filtered };
      if (filtered.length === 0) delete updated[date];
      return updated;
    });
  };

  const renderDateCell = (date) => {
    const dateStr = date.format('YYYY-MM-DD');
    const listData = events[dateStr] || [];

    // Styling for the list wrapper to show responsive grid
    const listWrapperStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',  // Telefon: 2 ustun
      gap: '8px',
    };

    // Media queries inline are not supported,
    // so we need to add styles globally or use CSS-in-JS (like styled-components),
    // but since you want no classes, I'll add a <style> tag below.

    return (
      <div style={listWrapperStyle}>
        {listData.map((item, index) => (
          <div key={index} style={{
            backgroundColor: '#f0f2f5',
            padding: '6px 10px',
            borderRadius: '6px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '12px',
          }}>
            <Badge status={item.type} text={item.content} />
            <div style={{ display: 'flex', gap: '8px', marginLeft: '8px' }}>
              <EditOutlined onClick={() => openModal({ data: item, date: dateStr, index })} style={{ cursor: 'pointer' }} />
              <DeleteOutlined onClick={() => handleDelete(dateStr, index)} style={{ cursor: 'pointer' }} />
            </div>
          </div>
        ))}
      </div>
    );
  };

  const cellRender = (current, info) => {
    if (info.type === 'date') {
      return renderDateCell(current);
    }
    return info.originNode;
  };

  return (
    <>


      <div>
        <Button className='absolute top-2 left-2 font-medium text-2xl py-2 z-50' type="primary" onClick={() => openModal()}>+</Button>
      </div>

      <Calendar cellRender={cellRender} className="overflow-y-scroll h-full rounded-xl" />

      <Modal
        title={editing ? "Mashina tahrirlash" : "Mashina qo‘shish"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="date" label="Sana" rules={[{ required: true }]}>
            <Input type="date" />
          </Form.Item>
          <Form.Item name="content" label="Mashina nomi" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="type" label="Holati" rules={[{ required: true }]}>
            <Select>
              <Option value="success">Yaxshi</Option>
              <Option value="warning">Ogohlantirish</Option>
              <Option value="error">Nosoz</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CalendarPage;
