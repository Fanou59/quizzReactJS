import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const SelectTheme = ({ themes, isSelected, children }) => {
  return (
    <Select onValueChange={isSelected} defaultValue="">
      <SelectTrigger className="">
        <SelectValue placeholder={`Select ${children}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {themes.map((theme, index) => (
            <SelectItem key={index} value={theme.name}>
              {theme.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
