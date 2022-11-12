import React from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Input,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
const ListHeader = ({ children }) => {
  return React.createElement(
    Text,
    { fontWeight: "500", fontSize: "lg", mb: 2 },
    children
  );
};
const SocialButton = ({ children, label, href }) => {
  return React.createElement(
    chakra.button,
    {
      bg: useColorModeValue("blackAlpha.100", "whiteAlpha.100"),
      rounded: "full",
      w: 8,
      h: 8,
      cursor: "pointer",
      as: "a",
      href: href,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 0.3s ease",
      _hover: {
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      },
    },
    React.createElement(VisuallyHidden, {}, label),
    children
  );
};

function getFullYear() {
  const d = new Date();
  return d.getFullYear();
}

export default function LargeWithAppLinksAndSocial() {
  return React.createElement(
    Box,
    {
      bg: useColorModeValue("gray.50", "gray.900"),
      color: useColorModeValue("gray.700", "gray.200"),
    },
    React.createElement(
      Container,
      { as: Stack, maxW: "6xl", py: 10 },
      React.createElement(
        SimpleGrid,
        { columns: { base: 1, sm: 2, md: 4 }, spacing: 8 },
        React.createElement(
          Stack,
          { align: "flex-start" },
          React.createElement(ListHeader, {}, "Kurumsal"),
          React.createElement(Link, { href: "#" }, "Hakkımızda"),
          React.createElement(Link, { href: "#" }, "Kariyer"),
          React.createElement(Link, { href: "#" }, "Bize Ulaşın"),
          React.createElement(
            Stack,
            { direction: "row", spacing: 6 },

            React.createElement(
              SocialButton,
              {
                label: "Instagram",
                href: "https://www.instagram.com/eflatun.butik/",
              },
              React.createElement(FaInstagram, {})
            )
          )
        ),

        React.createElement(
          Stack,
          { align: "flex-start" },
          React.createElement(ListHeader, {}, "Hesabım"),
          React.createElement(Link, { href: "#" }, "Hesabım"),
          React.createElement(Link, { href: "#" }, "Siparişlerim"),
          React.createElement(Link, { href: "#" }, "Adres Bilgilerim"),
          React.createElement(Link, { href: "#" }, "Alışveriş Sepetim"),
          React.createElement(Link, { href: "#" }, "Favorilerim")
        ),
        React.createElement(
          Stack,
          { align: "flex-start" },
          React.createElement(ListHeader, {}, "Sözleşmeler"),
          React.createElement(Link, { href: "#" }, "Çerez Politikası"),
          React.createElement(Link, { href: "#" }, "Gizlilik Politikası"),
          React.createElement(Link, { href: "#" }, "Kullanım Şartları")
        ),
        React.createElement(
          Stack,
          { align: "flex-start" },
          React.createElement(ListHeader, {}, "Bülten"),

          React.createElement(
            "small",
            {},
            "Kampanya ve Fırsatlarımızdan İlk Siz Haberdar Olun!"
          )
        )
      )
    ),
    React.createElement(
      Box,
      {
        borderTopWidth: 1,
        borderStyle: "solid",
        borderColor: useColorModeValue("gray.200", "gray.700"),
      },
      React.createElement(
        Container,
        {
          as: Stack,
          maxW: "6xl",
          py: 4,
          direction: { base: "column", md: "row" },
          spacing: 4,
          justify: { md: "space-between" },
          align: { md: "center" },
        },
        React.createElement(
          Text,
          { textAlign: "center" },
          `\u00A9 ${getFullYear()}  Eflatun Butik. Tüm Hakları Saklıdır.`
        )
      )
    )
  );
}
