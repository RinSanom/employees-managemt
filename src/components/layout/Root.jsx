import Side from "./sidebar";

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
