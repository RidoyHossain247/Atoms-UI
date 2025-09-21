import MainLogo from "../atoms/MainLogo";
import ContainerBox from "../ContainerBox";
import MenuListRow from "../molecules/MenuListRow";
import SearchBar from "../molecules/SearchBar";

const TopNavbar = () => {

  return (
    <div className="bg-white shadow-sm py-2">
      <ContainerBox>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center justify-between gap-4">
            <MainLogo
              src={
                "/mainLogo.png"
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
