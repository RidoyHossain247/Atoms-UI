import Button from '../atoms/Button'
import Input from '../atoms/Input'

const SearchBar = () => {
  return (
    <div className='flex flex-nowrap'>
      <Input
          placeholder="Search..."
          inputSize="sm"
          className="rounded-r-none border-r-0"
        />
        <Button
          label={"Submit"}
          size="sm"
          variant="primary"
          className="rounded-l-none border border-[var(--border)] border-l-0"
        />
    </div>
  )
}

export default SearchBar
