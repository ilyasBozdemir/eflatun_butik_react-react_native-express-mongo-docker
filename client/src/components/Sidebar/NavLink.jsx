import { Link } from "react-router-dom";
import { Flex, Icon, Text } from "@chakra-ui/react";

export default function NavLink({ link, ...rest }) {
  const { label, icon, href } = link;

  return (
    <Link to={href}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
       
        _hover={{ color: "white", bgGradient: "linear(to-l, #7928CA, #FF0080)" }}
        
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="25"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        <Text fontSize="1.2rem">{label}</Text>
      </Flex>
    </Link>
  );
}
