export const LeaveMeAFeedBack = ({ handleClick }) => {
  return (
    <div className="flex gap-5">
      <span className="text-white cursor-pointer" onClick={handleClick}>
        Laissez-moi un feedback 💬
      </span>
    </div>
  );
};
