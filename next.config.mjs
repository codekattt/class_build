/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  generateBuildId: () => "codekat-deploy-project",

  // 아래 주소들만 out 폴더에 만들어줘 => getServerSideProps에 있는 페이지 제외
  exportPathMap: () => ({
     
      "/": {page: "/"},
      "/boards": {page: "/boards"},
      "/404": {page: "/404"}
    
  })
};

export default nextConfig;
