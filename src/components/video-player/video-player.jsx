import Container from "@components/container";
import styles from "./video-player.module.css";
function VideoPlayer({
  id = "_0Pf48RqSsg",
  size = "sm",
}) {
  return (
    <Container
      size={size}
      cssMerge={true}
      className={styles["video-container"]}
    >
      <iframe src={`https://www.youtube.com/embed/${id}`}/>
    </Container>
  );
}
export default VideoPlayer;
