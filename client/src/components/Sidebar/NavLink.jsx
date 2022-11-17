import { Link } from "react-router-dom";
import {
  Icon,
  Text,
  useDisclosure as UseDisclosure,
  Wrap,
  WrapItem,
  Flex,
} from "@chakra-ui/react";

export default function NavLink({ link, ...rest }) {
  const { label, href, icon, childrens } = link;

  const { isOpen, onOpen, onClose } = UseDisclosure();

  return (
    <Link href={href} as="a">
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        _hover={{
          color: "white",
          bgGradient: "linear(to-l, #7928CA, #FF0080)",
        }}
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
