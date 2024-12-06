import { Button } from "@chakra-ui/react";

interface CustomButtonProps {
  name: string;
  size?: "sm" | "md" | "lg";
  color?: string;
  onClick?: () => void; 
}

const CustomButton: React.FC<CustomButtonProps> = ({
  name,
  size = "md", 
  color = "custom.500", 
  onClick,
}) => {
  return (
    <Button
      size={size}
      bg={color}
      color="white"
      borderColor={color}
      _hover={{
        bg: `${color}`,
        opacity: 0.9, 
      }}
      _focus={{
        bg: `${color}`,
        borderColor: `${color}`,
        boxShadow: "none",
      }}
      _active={{
        bg: `${color}`,
        borderColor: `${color}`,
      }}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

export default CustomButton;
