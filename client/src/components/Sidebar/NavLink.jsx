import { Link } from "react-router-dom";
import {
  Icon,
  Text,
  useDisclosure as UseDisclosure,
  Wrap,
  WrapItem,
  Flex,
  Button,
} from "@chakra-ui/react";

import {
  
  ChevronDownIcon,
  ChevronUpIcon

 } from '@chakra-ui/icons'


export default function NavLink({ link, ...rest }) {
  const { isOpen, onOpen, onClose } = UseDisclosure();

  const { label, href, icon, childrens } = link;

  return (
    <Link to={href}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
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

        {childrens.map((link, i) => (
          <Link to={link.href}>
           <Text >
             {link.label}
           </Text>
          </Link>
        ))}
      </Flex>
    </Link>
  );
}
