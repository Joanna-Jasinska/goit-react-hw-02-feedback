import css from './../Feedback.module.css';
export const Notification = ({ message }) => {
  return <span className={css.notification}>{message}</span>;
};
