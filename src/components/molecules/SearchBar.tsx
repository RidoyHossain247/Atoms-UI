import Button from "../atoms/Button";
import Input from "../atoms/Input";

const SearchBar = () => {
  return (
    <div className="relative">
      <Input
        placeholder="Search..."
        inputSize="sm"
        className="w-80 pr-[80px]"
      />
      <Button
        label={"Submit"}
        size="sm"
        variant="primary"
        className="absolute right-0 top-0 bottom-0 h-full rounded-l-none"
      />
    </div>
  );
};

export default SearchBar;
