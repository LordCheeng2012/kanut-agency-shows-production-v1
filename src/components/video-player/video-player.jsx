import Container from "@components/container";
import styles from "./video-player.module.css";
function VideoPlayer({ id = "_0Pf48RqSsg", size = "sm" }) {
  return (
    <Container
      size={size}
      cssMerge={true}
      className={styles["video-container"]}
    >
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </Container>
  );
}
export default VideoPlayer;
