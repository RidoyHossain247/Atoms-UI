import MainLogo from "../atoms/MainLogo";
import ContainerBox from "../ContainerBox";
import MenuListRow from "../molecules/MenuListRow";
import SearchBar from "../molecules/SearchBar";

const TopNavbar = () => {

  return (
    <div className="bg-white shadow-sm">
      <ContainerBox>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center justify-between gap-4">
            <MainLogo
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBafn6htUwD66XwcwPrprx8vsoR0iVOKTLns_Yw9GTrICPflikrCKddOWwjJzJu3pv0w&usqp=CAU"
              }
              label={"Youtube"}
              width={93}
            />
            <SearchBar />
          </div>
          <MenuListRow/>
        </div>
      </ContainerBox>
    </div>
  );
};

export default TopNavbar;
