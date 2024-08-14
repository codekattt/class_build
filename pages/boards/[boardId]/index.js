import { useRouter } from "next/router"

export default function BoardPage(){

    const router = useRouter()

    return (
    <>
        <div>안녕하세요 게시판 상세 동적 페이지입니다.</div>
        <div>게시글 아이디: {router.query.boardId}</div>
    </>
)
}

// export const getServerSideProps = () => {
//     // 만약 서버사이드 렌더링 하는 페이지라면 OUT 폴더로 생성 불가.
//     // 이런 경우, next.config.mjs 에서 exportPathMap으로 현재페이지 제외시키기
// }