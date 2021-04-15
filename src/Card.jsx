import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';

const theme = {
    spacing: 8,
  }
  
const useStyles = makeStyles(({ palette }) => ({
  card: {
    position: 'right',
    width: 600,
    borderRadius: 50,
    minWidth: 255,
    textAlign: 'center',
    
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: '0.875em',
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
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
}));

export const ProfileCardDemo = React.memo(function ProfileCard() {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });
  return (
    <Box
        position="absolute"
        top={80}
        left="25%"
      >
        <Card className={cx(styles.card, shadowStyles.root)} position={"center"}>
          <CardContent>
            <Avatar className={styles.avatar} src={'https://i.pravatar.cc/300'} />
            <h3 className={styles.heading}>Alan Podemski</h3>
            <span className={styles.subheader}>Poland</span>
          </CardContent>
          <Divider light />
          <Box display={'flex'}>
            <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
              <p className={styles.statLabel}>Wins</p>
              <p className={styles.statValue}>69</p>
            </Box>
            <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
              <p className={styles.statLabel}>Losses</p>
              <p className={styles.statValue}>12</p>
            </Box>
          </Box>
        </Card>
    </Box>
  );
});

export default ProfileCardDemo