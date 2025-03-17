import { useRouter } from "next/router";
export default function Page() {
  const router = useRouter(); // router 객체 생성
  const { id } = router.query; // 동적 파라미터 추출
  return <h1>상세 북 페이지 {id} </h1>;
}
