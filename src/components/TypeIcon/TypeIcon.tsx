import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

interface TypeIconProps {
  type?: string;
}

const TypeIcon = ({ type }: TypeIconProps) => (
  <div className="flex justify-center">
    <LocalFireDepartmentIcon fontSize="large" className="text-orange-500" />
  </div>
);

export default TypeIcon;
