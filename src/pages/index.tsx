import React from "react";
import {
  Container,
  Typography,
  Box,
  Link,
  Grid,
  Paper,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WaveBackground from "../components/WaveBackground";
import { keyframes } from "@mui/system";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const hoverGrow = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.05); }
`;

type Project = {
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Property Management Software",
    description:
      "REST APIs with Next.js & MongoDB, Firebase notifications, and access control via NextAuth.",
  },
  {
    title: "Vehicle E-commerce Platform",
    description:
      "NestJS, MongoDB, Swagger API docs, role-based Passport.js authentication.",
  },
  {
    title: "Ophthalmic Hospital Software",
    description:
      "Multi-org support with RBAC, RESTful APIs using Node.js, Swagger documentation.",
  },
  {
    title: "AI-based CRUD System",
    description: "AI prompt-based user management using OpenAI + Node.js backend.",
  },
];

const skills: { title: string; items: string }[] = [
  {
    title: "Languages",
    items: "JavaScript, TypeScript, Python, Golang",
  },
  {
    title: "Backend",
    items: "Node.js, Express, NestJS, FastAPI, REST, GraphQL, WebSockets",
  },
  {
    title: "Databases",
    items: "MongoDB, MySQL, PostgreSQL, Redis",
  },
  {
    title: "DevOps & Tools",
    items: "Docker, Kubernetes, AWS, Rancher, Helm, Argo CI/CD, Grafana, Linux",
  },
];

const Home: React.FC = () => {
  return (
    <>
      <WaveBackground />

      <Container maxWidth="md" sx={{ pt: 4, pb: 8, position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{
              animation: `${float} 4s ease-in-out infinite`,
              color: "#ffffff",
              textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            Abdul Kadir
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Backend Developer & DevOps Engineer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Mumbai, India • +91-9930-514782 •{" "}
            <Link href="mailto:kadirab1999@gmail.com" underline="hover" color="inherit">
              kadirab1999@gmail.com
            </Link>
          </Typography>

          <Stack
            direction="row"
            justifyContent="center"
            spacing={3}
            mt={2}
            sx={{
              "& a:hover": {
                transform: "scale(1.2)",
                transition: "transform 0.3s ease",
              },
            }}
          >
            <Link
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link
              href="https://github.com/Kadir70-dev"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="large" />
            </Link>
          </Stack>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* About */}
        <Box mb={6}>
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            Experienced Backend Developer and DevOps Engineer with a proven track record in
            building scalable backend systems using Node.js and managing DevOps pipelines with
            Kubernetes, Docker, and Argo CI/CD. Skilled in Ubuntu server management, monitoring
            with Grafana, and volume management with Longhorn.
          </Typography>
        </Box>

        {/* Skills */}
        <Box mb={6}>
          <Typography variant="h4" gutterBottom>
            Skills
          </Typography>
          <Grid container spacing={2}>
            {skills.map(({ title, items }) => (
              <Grid item xs={12} sm={6} key={title}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    animation: `${float} 6s ease-in-out infinite`,
                    "&:hover": {
                      animation: `${hoverGrow} 0.3s forwards`,
                    },
                  }}
                >
                  <Typography variant="h6" mb={1}>
                    {title}
                  </Typography>
                  <Typography color="text.secondary">{items}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Projects */}
        <Box mb={6}>
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>
          <Grid container spacing={3}>
            {projects.map(({ title, description }) => (
              <Grid item xs={12} sm={6} key={title}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    height: "100%",
                    animation: `${float} 5s ease-in-out infinite`,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px) scale(1.03)",
                      boxShadow:
                        "0 10px 20px rgba(25, 118, 210, 0.4), 0 6px 6px rgba(25, 118, 210, 0.15)",
                    },
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {title}
                  </Typography>
                  <Typography color="text.secondary">{description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact */}
        <Box textAlign="center" mt={8}>
          <Typography variant="h5" gutterBottom>
            Get In Touch
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="mailto:kadirab1999@gmail.com"
            size="large"
            sx={{
              animation: `${float} 4s ease-in-out infinite`,
              "&:hover": {
                animation: "none",
                transform: "scale(1.05)",
              },
            }}
          >
            Email Me
          </Button>
          <Typography variant="body2" color="text.secondary" mt={2}>
            Phone: +91-9930-514782
          </Typography>
        </Box>

        {/* Footer */}
        <Box mt={10} mb={4} textAlign="center" color="text.disabled">
          &copy; {new Date().getFullYear()} Abdul Kadir. All rights reserved.
        </Box>
      </Container>
    </>
  );
};

export default Home;
