import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter(); // router 객체 생성
  const { q } = router.query; // 쿼리 파라미터 추출
  return <h1>검색 페이지 {q}</h1>;
}
