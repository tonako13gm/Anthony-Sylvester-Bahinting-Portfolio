import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Stack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

function Navigation(props) {
  const navList = props.data.map(navItem =>
    <li class="navIcons">
      <a href={navItem.url} target="_blank">
        <FontAwesomeIcon icon={navItem.icon} size='2x'/>
      </a>
    </li>
  );
  return <ul><HStack spacing={9} style={{listStyle: "none"}}>{navList}</HStack></ul>
}


const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="10000"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <Stack
          direction={{ base:'column', md:'row'}}
          px={16}
          py={{base:'6', md:'4'}}
          justifyContent={{base:'flex-end', md:'space-between'}}
          alignItems={{base:'center'}}
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={9} pb={{base:'4', md:'0'}}>
              <Navigation data={socials} />
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              {<a class="navIcons" onClick={handleClick} href="#projects-section" >Projects</a>}
              {<a class="navIcons" onClick={handleClick} href="#contactme-section">Contact Me</a>}
            </HStack>
          </nav>
        </Stack>
      </Box>
    </Box>
  );
};
export default Header;
