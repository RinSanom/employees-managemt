import Side from "./Sidebar";

const RootLayout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex ">
        <Side />
        <main className="flex ml-10">{children}</main>
      </div>
    </>
  );
};

export default RootLayout;
