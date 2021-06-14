import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Divider,
  Grid,
} from "@material-ui/core";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";

const useStyles = makeStyles(({ palette }) => ({
  card: {
    flexGrow: 1,
    width: "60%",
    minWidth: 250,
    maxWidth: 700,
    borderRadius: 40,
    textAlign: "center",
  },
  avatar: {
    flexGrow: 1,
    width: 60,
    height: 60,
    margin: "auto",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: "0.875em",
  },
  statLabel: {
    fontSize: 16,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },
}));

export const ProfileCardDemo = React.memo(function ProfileCard() {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: "rgba(0, 0, 0, 0.08)",
    height: "50%",
  });
  return (
    <Box position="absolute" top={80} left="10%" className={styles.card}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Card
          className={cx(styles.card, shadowStyles.root)}
          position={"center"}
        >
          <CardContent>
            <Avatar
              className={styles.avatar}
              src={
                "https://tennishead.net/wp-content/uploads/2021/02/Stefanos-Tsitsipas-celebrates.jpg"
              }
            />
            <h3 className={styles.heading}>Markos Tsitsipas</h3>
            <span className={styles.subheader}>Greece</span>
            <h3 className={styles.statLabel}>markostsitsipas@gmail.com</h3>
          </CardContent>
          <Divider light />
          <Box display={"flex"}>
            <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
              <p className={styles.statLabel}>Age</p>
              <p className={styles.statValue}>28</p>
            </Box>
            <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
              <p className={styles.statLabel}>Weight</p>
              <p className={styles.statValue}>78kg</p>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Box>
  );
});

export default ProfileCardDemo;
