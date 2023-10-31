import DefaultLayout from "./Default";

const LayoutTypesMapping = {
  DefaultLayout,
};

const defaultLayoutType = "DefaultLayout";

const Layout = ({ asLayout = defaultLayoutType, children, ...rest }) => {
  const LayoutType = LayoutTypesMapping[asLayout];

  return <LayoutType {...rest}>{children}</LayoutType>;
};

export default Layout;
