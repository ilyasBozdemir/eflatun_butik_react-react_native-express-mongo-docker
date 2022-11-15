import React from "react";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

function index() {
  return (
    <Container
      as="footer"
      role="contentinfo"
      maxW={"container.lg"}
      bg={"black.300"}
      color={"black"}
      marginTop={10}
    >
      <Divider marginBottom={3} />
      <Stack
        spacing="8"
        direction={{
          base: "column",
          md: "row",
        }}
        justify="space-between"
        py={{
          base: "12",
          md: "16",
        }}
      >
        <Stack
          spacing={{
            base: "6",
            md: "8",
          }}
          align="center"
          justifyContent={'center'}
          ml={10}
          mr={10}
        >
          <Logo />
          <Text color="muted.200">En Trend Kadın Giyim</Text>

          <ButtonGroup variant="ghost">
            <Link href="/" isExternal>
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook fontSize="1.25rem" />}
                _hover={{ bg: "blue.500", color: " white" }}
              />
            </Link>
            <Link href="/" isExternal>
              <IconButton
                as="button"
                aria-label="Instagram"
                icon={<FaInstagram fontSize="1.25rem" />}
                _hover={{ bg: "pink.500", color: " white" }}
              />
            </Link>
          </ButtonGroup>
        </Stack>

        <Stack
          direction={{
            base: "column-reverse",
            md: "column",
            lg: "row",
          }}
          spacing={{
            base: "12",
            md: "8",
          }}
        >
          <Stack direction="row" spacing="8">
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                Product
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link" color="blue.400" >How it works</Button>
                <Button variant="link" color="blue.400" >Pricing</Button>
                <Button variant="link" color="blue.400">Use Cases</Button>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                Legal
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link" color="blue.400">Privacy</Button>
                <Button variant="link" color="blue.400">Terms</Button>
                <Button variant="link" color="blue.400">License</Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing="4">

            <Text fontSize="sm" fontWeight="semibold">
              Bizden Haberler
            </Text>

            <Text as="div">Kampanya ve Fırsatlarımızdan İlk Siz Haberdar Olun!</Text>

            <Stack
              spacing="4"
              direction={{
                base: "column",
                sm: "row",
              }}
              maxW={{
                lg: "360px",
              }}
            >
              <Input
                placeholder="e-mail adresini giriniz"
                type="email"
                required
              />
              <Button color="blue.400" type="submit" flexShrink={0}>
                Abone ol
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        pt="8"
        justify="flex-start"
        direction={{
          base: "column-reverse",
          md: "row",
        }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Eflatun Butik. Tüm Hakları
          Saklıdır..
        </Text>
      </Stack>

      <Divider orientation='horizontal'  />

      <Stack
        justify="flex-end"
        direction={{
          base: "column",
          md: "row",
        }}
        align="center"
      >
        <Text textAlign="center" fontSize="sm" color="subtle">
          Bu websitesi İlyas Bozdemir tarafından geliştirilmiştir.
        </Text>
        <ButtonGroup >
          <Link href="https://github.com/ilyasBozdemir/" isExternal>
            <IconButton
              aria-label="Github"
              icon={<FaGithub fontSize="1.25rem" />}
              _hover={{ bg: "black.500", color: "white" }}
            />
          </Link>
          <Link href="https://www.instagram.com/bozdemirilyas1/" isExternal>
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram fontSize="1.25rem" />}
              _hover={{ bg: "pink.500", color: " white" }}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/ilyas-bozdemir-093087207/" isExternal>
            <IconButton
              aria-label="Linkedin"
              icon={<FaLinkedin fontSize="1.25rem" />}
              _hover={{ bg: "blue.500", color: " white" }}
            />
          </Link>
        </ButtonGroup>
      </Stack>
    </Container>
  );
}

export default index;
