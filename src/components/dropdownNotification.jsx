import React from 'react';
import Icon from './icon';
import Button from './button';
import Typography from '../components/typography';

const notifications = [
  {
    link: '#',
    icon: 'drawing-tablet',
    title: 'Ilustração',
    caption: '3D Character Pack Sport Illustration &amp; 3D Elements object',
    read: false,
  },
  {
    link: '#',
    icon: 'drawing-tablet',
    title: 'Ilustração',
    caption: '3D Character Pack Sport Illustration &amp; 3D Elements object',
    read: false,
  },
  {
    link: '#',
    icon: 'drawing-tablet',
    title: 'Ilustração',
    caption: '3D Character Pack Sport Illustration &amp; 3D Elements object',
    read: false,
  },
  {
    link: '#',
    icon: 'drawing-tablet',
    title: 'Ilustração',
    caption: '3D Character Pack Sport Illustration &amp; 3D Elements object',
    read: true,
  },
  {
    link: '#',
    icon: 'drawing-tablet',
    title: 'Ilustração',
    caption: '3D Character Pack Sport Illustration &amp; 3D Elements object',
    read: true,
  },
  {
    link: '#',
    icon: 'drawing-tablet',
    title: 'Ilustração',
    caption: '3D Character Pack Sport Illustration &amp; 3D Elements object',
    read: true,
  },
  {
    link: '#',
    icon: 'drawing-tablet',
    title: 'Ilustração',
    caption: '3D Character Pack Sport Illustration &amp; 3D Elements object',
    read: true,
  },
  {
    link: '#',
    icon: 'drawing-tablet',
    title: 'Ilustração',
    caption: '3D Character Pack Sport Illustration &amp; 3D Elements object',
    read: true,
  },
];

const DropdownNotification = () => {
  return (
    <div className="dropdown-notification dropdown-menu dropdown-menu-dark dropdown-menu-end">
      <ul>
        {notifications.map(({ link, icon, title, caption, read }, index) => (
          <li key={index}>
            <a
              className={
                read
                  ? 'list-group-item animated-icon d-flex justify-content-between align-items-center notread gap-3 read'
                  : 'list-group-item animated-icon d-flex justify-content-between align-items-center notread gap-3'
              }
              href={link}
            >
              <div className="col me-auto">
                <Icon
                  IconName={icon}
                  Animate
                  Stroke="80"
                  Trigger="hover"
                  class={read ? '' : 'notification-new notification-left'}
                  style={{ width: '60px', height: '60px' }}
                />
              </div>
              <div className="col-auto">
                <hgroup>
                  <Typography Component="h4" className="fw-bold h5">
                    {title}
                  </Typography>
                  <Typography Component="small">{caption}</Typography>
                </hgroup>
              </div>
              <div className="col">
                <Button
                  Component="button"
                  Size="sm"
                  StyleBTN="primary"
                  style={{ width: '72px' }}
                >
                  {read === true ? (
                    <Icon
                      IconName="check"
                      style={{ width: '16px', height: '16px', marginLeft: '0' }}
                    />
                  ) : (
                    ''
                  )}
                  {read === true ? 'Lido' : 'Ver mais'}
                </Button>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <div className="footerNotifications">
        <Button Component="a" href="#" StyleBTN="secondary">
          Ver todas notificações
        </Button>
      </div>
    </div>
  );
};

export default DropdownNotification;
