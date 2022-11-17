import dynamic from "next/dynamic";

const Box = dynamic(() => import("@mui/material/Box"));
const Text = dynamic(() => import("@mui/material/Typography"));

interface SectionDetailProperties {
  title: string;
  children: React.ReactNode;
}

const SectionDetail: React.FC<SectionDetailProperties> = ({
  title,
  children,
}) => {
  return (
    <Box marginTop="5rem" marginBottom="6rem">
      <Text fontSize="1.25rem" fontWeight="700">
        {title}
      </Text>
      <Box
        display="flex"
        justifyContent="space-between"
        columnGap="1rem"
        marginTop="2rem"
        flexWrap="wrap"
      >
        {children}
      </Box>
    </Box>
  );
};

export default SectionDetail;
