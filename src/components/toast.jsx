/* PROPERTIES TOAST
 *
 *  > position (Ex.: top-start, top-center, top-end, middle-start, middle-center, middle-end, bottom-start, bottom-center, bottom-end)
 *  > position (Ex.: 'top-start', 'top-center', 'top-end', 'middle-start', 'middle-center', 'middle-end', 'bottom-start', 'bottom-center', 'bottom-end')
 *  > Show (Ex.: toastData.show, setToastData({ ...toastData, show: false }))
 *  > delay (Ex.: setToastData({ ...toastData, delay: 5000 })))
 *  > autohide (Ex.: true, false)
 *  > className (Ex.: setToastData({ ...toastData, className: 'd-inline-block' })))
 *  > variant (Ex.: Primary, Secondary, Success, Danger, Warning, Info, Light, Dark)
 *  > icon (Ex.: setToastData({ ...toastData, icon: 'home' })))
 *  > iconSize (Ex.: setToastData({ ...toastData, iconSize: 2 })))
 *  > title (Ex.:  setToastData({ ...toastData, title: 'Title toast' })))
 *  > time (Ex.:  setToastData({ ...toastData, time: '2 seconds ago' })))
 *  > message (Ex.: setToastData({ ...toastData, message: 'Heads up, toasts will stack automatically' })))
 */

import React from 'react';
import { ToastContainer, Toast } from 'react-bootstrap';
import Icons from './icon';

const ToastMiraUp = ({ toastData, setToastData }) => {
  return (
    <ToastContainer
      position={toastData.position}
      className="p-3 position-fixed"
      style={{ zIndex: 1100 }}
    >
      <Toast
        onClose={() => setToastData({ ...toastData, show: false })}
        show={toastData.show}
        delay={toastData.delay}
        autohide={toastData.autohide}
        className={toastData.className}
        bg={toastData.variant}
      >
        <Toast.Header>
          {toastData.iconSize != undefined && (
            <Icons IconName={toastData.icon} Size={toastData.iconSize} />
          )}
          <strong className="me-auto">{toastData.title}</strong>
          {toastData.time != undefined && (
            <small className="text-muted">{toastData.time}</small>
          )}
        </Toast.Header>
        <Toast.Body>{toastData.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastMiraUp;
