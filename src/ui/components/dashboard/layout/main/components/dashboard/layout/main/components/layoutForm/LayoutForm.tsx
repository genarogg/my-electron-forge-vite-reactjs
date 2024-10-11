interface LayoutFromProps {
  children: React.ReactNode;
}

const LayoutFrom: React.FC<LayoutFromProps> = ({ children }) => {
  return (
    <>
      <div className="layout-form">{children}</div>
    </>
  );
};

export default LayoutFrom;
