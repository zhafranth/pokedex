import dynamic from "next/dynamic";

const Box = dynamic(() => import("@mui/material/Box"));
const Text = dynamic(() => import("@mui/material/Typography"));

interface TextFieldProperties {
  value: string | number | React.ReactNode;
  label: string;
}

const TextField: React.FC<TextFieldProperties> = ({ label, value }) => {
  return (
    <Box display="flex" columnGap="0.7rem">
      <Text fontWeight="700" paragraph>
        {label} :{" "}
      </Text>
      {typeof value === "object" ? value : <Text paragraph>{value}</Text>}
    </Box>
  );
};

export default TextField;
