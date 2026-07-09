const lessons = [
  {
    title: "Làm quen với Web, HTML cơ bản và môi trường làm việc",
    goals: [
      "Phân biệt vai trò của trình duyệt, HTML, CSS và JavaScript.",
      "Tạo được thư mục project và file index.html đầu tiên.",
      "Viết được trang giới thiệu bản thân bằng các thẻ HTML cơ bản."
    ],
    topics: [
      "Website hoạt động như thế nào ở mức khái quát.",
      "Vai trò của HTML, CSS và JavaScript.",
      "Cài đặt Visual Studio Code, tạo folder project.",
      "Cấu trúc file HTML: doctype, html, head, body.",
      "Các thẻ h1-h6, p, a, img, br, hr.",
      "Cách đặt tên file, lưu hình ảnh và mở trang bằng trình duyệt."
    ],
    teacher: [
      "Minh họa một trang web hoàn chỉnh và tách thành HTML, CSS, hình ảnh.",
      "Hướng dẫn tạo project đầu tiên trong VS Code.",
      "Code mẫu trang giới thiệu ngắn và giải thích từng thẻ.",
      "Hỗ trợ lỗi thường gặp: sai đường dẫn, ảnh không hiển thị, lưu nhầm file."
    ],
    student: [
      "Tạo folder project cá nhân.",
      "Viết file index.html theo mẫu rồi thay bằng thông tin của mình.",
      "Thêm ảnh đại diện và ít nhất một liên kết ngoài.",
      "Mở trang bằng trình duyệt và chỉnh lại lỗi hiển thị."
    ],
    product: "Trang HTML giới thiệu bản thân gồm tiêu đề, mô tả ngắn, ảnh đại diện và một liên kết ngoài.",
    homework: [
      "Viết đoạn giới thiệu 5-7 câu.",
      "Thêm ảnh đại diện lưu trong thư mục project.",
      "Thêm tối thiểu 3 sở thích hoặc mục tiêu học tập.",
      "Thêm liên kết đến GitHub, Facebook hoặc website yêu thích."
    ],
    evaluation: [
      "File mở được trên trình duyệt.",
      "HTML có đủ cấu trúc cơ bản.",
      "Ảnh và liên kết hoạt động đúng.",
      "Nội dung không để nguyên dữ liệu mẫu."
    ],
    slides: [
      "Website gồm những phần nào?",
      "HTML, CSS, JavaScript làm việc với nhau ra sao?",
      "Cấu trúc file HTML đầu tiên.",
      "Demo: tạo trang giới thiệu bản thân."
    ],
    deckUrl: "https://docs.google.com/presentation/d/1FYNRnHmBGCzQC68DisM00XM1vcqF8IvC-i5EWfw5eZE/edit?usp=sharing",
    embedUrl: "https://docs.google.com/presentation/d/1FYNRnHmBGCzQC68DisM00XM1vcqF8IvC-i5EWfw5eZE/embed?start=false&loop=false&delayms=3000"
  },
  {
    title: "Tổ chức nội dung với HTML semantic, danh sách, bảng và form",
    goals: [
      "Sắp xếp nội dung bằng header, main, section và footer.",
      "Tạo được danh sách, bảng thông tin và form nhập liệu cơ bản.",
      "Nâng cấp trang cá nhân thành bố cục có cấu trúc rõ ràng."
    ],
    topics: [
      "Danh sách ul, ol, li.",
      "Bảng table, thead, tbody, tr, th, td.",
      "Form, label, input, textarea, select, button.",
      "Input text, email, tel, radio, checkbox.",
      "Semantic HTML: header, nav, main, section, article, aside, footer.",
      "Vai trò của label và cấu trúc nội dung dễ đọc."
    ],
    teacher: [
      "So sánh trang dùng nhiều div với trang có semantic HTML.",
      "Hướng dẫn chia website thành các khu vực nội dung.",
      "Code mẫu form liên hệ và giải thích quan hệ giữa label và input.",
      "Gợi ý cách chọn nội dung phù hợp với project cuối khóa."
    ],
    student: [
      "Chuyển trang buổi 1 sang cấu trúc semantic.",
      "Tạo danh sách kỹ năng, sở thích hoặc mục tiêu.",
      "Tạo bảng nhỏ như lịch học hoặc kế hoạch tuần.",
      "Thêm form liên hệ hoặc form đăng ký nhận thông tin."
    ],
    product: "Website có cấu trúc HTML rõ ràng, tối thiểu 4 khu vực nội dung và một form cơ bản.",
    homework: [
      "Header có tên website và menu điều hướng.",
      "Main có ít nhất 3 section.",
      "Footer có thông tin liên hệ hoặc ghi chú bản quyền.",
      "Form có tối thiểu 3 trường nhập liệu và nút gửi."
    ],
    evaluation: [
      "Dùng đúng semantic HTML ở vị trí hợp lý.",
      "Form có label rõ ràng.",
      "Nội dung đủ để tiếp tục thiết kế CSS.",
      "Code thụt dòng dễ đọc."
    ],
    slides: [
      "Vì sao cần semantic HTML?",
      "Danh sách, bảng và form trong website thực tế.",
      "Demo: form liên hệ.",
      "Checklist HTML trước khi sang CSS."
    ]
  },
  {
    title: "CSS cơ bản, selector, màu sắc và chữ",
    goals: [
      "Kết nối được file CSS riêng với HTML.",
      "Dùng selector để định dạng đúng phần tử mong muốn.",
      "Thiết lập được phong cách thị giác ban đầu cho website."
    ],
    topics: [
      "CSS là gì và cách trình duyệt áp dụng CSS.",
      "Inline, internal và external CSS.",
      "Liên kết file CSS bằng thẻ link.",
      "Selector theo thẻ, class và id.",
      "color, background-color, font-size, font-family, font-weight, text-align, line-height.",
      "Đơn vị px, %, em, rem."
    ],
    teacher: [
      "Tạo file style.css và kết nối với project mẫu.",
      "Giải thích selector bằng ví dụ trực tiếp.",
      "Thiết kế nhanh nền, tiêu đề, đoạn văn, liên kết và nút.",
      "Nhắc lỗi sai tên file CSS, sai đường dẫn, thiếu dấu chấm ở class."
    ],
    student: [
      "Tạo file CSS riêng cho project.",
      "Gán class cho các khu vực chính.",
      "Định dạng màu nền, màu chữ, font và line-height.",
      "Làm nổi bật tiêu đề, liên kết và nút gửi form."
    ],
    product: "Website có phong cách giao diện đầu tiên: màu sắc thống nhất, chữ dễ đọc và CSS đặt trong file riêng.",
    homework: [
      "Chọn bảng màu 2-3 màu chính.",
      "Làm tiêu đề chính nổi bật nhưng dễ đọc.",
      "Bo góc ảnh đại diện hoặc ảnh hero.",
      "Trình bày danh sách sở thích/kỹ năng gọn gàng.",
      "Không dùng inline CSS trong bài nộp."
    ],
    evaluation: [
      "CSS được đặt trong file riêng.",
      "Selector dùng đúng mục đích.",
      "Màu sắc và chữ đủ tương phản.",
      "Trang không còn là HTML thô."
    ],
    slides: [
      "CSS thay đổi giao diện như thế nào?",
      "Selector: element, class, id.",
      "Màu sắc, font chữ và khả năng đọc.",
      "Demo: trang cá nhân có style."
    ]
  },
  {
    title: "Box model, spacing, border và card layout",
    goals: [
      "Giải thích được kích thước và khoảng cách của phần tử trên trình duyệt.",
      "Dùng margin, padding, border và border-radius để tạo khối nội dung rõ ràng.",
      "Xây dựng được card đơn giản cho kỹ năng, sản phẩm hoặc dự án."
    ],
    topics: [
      "CSS Box Model: content, padding, border, margin.",
      "width, max-width, height, padding, margin, border, border-radius, box-sizing.",
      "Display block, inline, inline-block, none.",
      "Cách căn giữa container.",
      "Tạo card giao diện: ảnh, tiêu đề, mô tả, nút.",
      "Khoảng trắng trong thiết kế giao diện."
    ],
    teacher: [
      "Dùng DevTools để chỉ ra box model trên phần tử thật.",
      "Chuyển section văn bản thành card có nền, viền và khoảng cách.",
      "Hướng dẫn tạo container có max-width.",
      "Góp ý nhanh về spacing trong project của học viên."
    ],
    student: [
      "Áp dụng box-sizing: border-box.",
      "Tạo container chính cho website.",
      "Biến một nhóm nội dung thành card.",
      "Điều chỉnh margin/padding để các section tách nhau rõ."
    ],
    product: "Website có container rõ ràng và ít nhất 3 card nội dung được thiết kế thống nhất.",
    homework: [
      "Tạo khu vực Dự án, Dịch vụ hoặc Sản phẩm gồm ít nhất 3 card.",
      "Mỗi card có tiêu đề, mô tả ngắn và hình ảnh hoặc icon.",
      "Card có padding, border hoặc shadow nhẹ.",
      "Có nút hoặc liên kết Xem thêm."
    ],
    evaluation: [
      "Biết dùng padding và margin đúng vai trò.",
      "Card có cấu trúc nhất quán.",
      "Nội dung không sát mép màn hình.",
      "Giao diện dễ nhìn hơn phiên bản trước."
    ],
    slides: [
      "Box model bằng hình dung đơn giản.",
      "Margin khác padding thế nào?",
      "Card trong website hiện đại.",
      "Demo: tạo 3 card dự án."
    ]
  },
  {
    title: "Flexbox trong layout thực tế",
    goals: [
      "Dùng Flexbox để căn hàng ngang, căn giữa và phân bố khoảng cách.",
      "Xây dựng được navbar, hero section và danh sách card bằng Flexbox.",
      "Biết dùng gap, justify-content, align-items và flex-wrap."
    ],
    topics: [
      "Flex container và flex item.",
      "display: flex, flex-direction, justify-content, align-items, gap, flex-wrap.",
      "Header và navbar.",
      "Hero section có chữ và hình ảnh.",
      "Danh sách card linh hoạt.",
      "Lỗi item bị co, tràn hoặc lệch hàng."
    ],
    teacher: [
      "Dựng header có tên website và menu.",
      "Code hero section gồm phần giới thiệu và hình ảnh.",
      "Biến danh sách card từ layout dọc thành ngang có wrap.",
      "Hướng dẫn đọc bố cục trước khi viết CSS."
    ],
    student: [
      "Tạo hoặc chỉnh header bằng Flexbox.",
      "Xây dựng hero section cho project.",
      "Sắp xếp card kỹ năng/sản phẩm/dự án thành hàng linh hoạt.",
      "Kiểm tra giao diện khi thay đổi chiều rộng cửa sổ."
    ],
    product: "Website có header, navbar, hero section và nhóm card được dựng bằng Flexbox.",
    homework: [
      "Header có tên website và menu.",
      "Hero có tiêu đề, mô tả, nút kêu gọi hành động và hình ảnh.",
      "Danh sách 3-4 dịch vụ, kỹ năng, sản phẩm hoặc dự án.",
      "Footer đơn giản.",
      "Ít nhất 2 khu vực sử dụng Flexbox."
    ],
    evaluation: [
      "Flexbox được dùng đúng cho bố cục hàng/cột.",
      "Header và hero cân đối.",
      "Card không dính nhau hoặc lệch bất thường.",
      "Giao diện vẫn đọc được khi thu nhỏ cửa sổ."
    ],
    slides: [
      "Flexbox giải quyết vấn đề gì?",
      "Các trục trong Flexbox.",
      "Navbar, hero và card list.",
      "Demo: layout landing page cơ bản."
    ]
  },
  {
    title: "Position, pseudo-class và hiệu ứng hover",
    goals: [
      "Điều khiển vị trí phần tử bằng các giá trị position phổ biến.",
      "Tạo trạng thái hover/focus cho nút, liên kết, card và form.",
      "Thêm hiệu ứng chuyển động nhẹ để giao diện phản hồi tốt hơn."
    ],
    topics: [
      "Position static, relative, absolute, fixed, sticky.",
      "z-index và thứ tự lớp hiển thị.",
      ":hover, :active, :focus, :nth-child.",
      "::before và ::after.",
      "transition cơ bản.",
      "Sticky navbar, badge trên card, hover button, focus form."
    ],
    teacher: [
      "Minh họa relative, absolute, fixed và sticky.",
      "Tạo badge Featured trên một card bằng position absolute.",
      "Thêm hover effect cho button và card.",
      "Nhắc trạng thái focus phải nhìn thấy được."
    ],
    student: [
      "Làm navbar sticky cho project.",
      "Thêm hover cho menu, button và card.",
      "Gắn badge hoặc nhãn nổi lên card/dự án nổi bật.",
      "Kiểm tra hiệu ứng không làm chữ khó đọc hoặc layout bị nhảy."
    ],
    product: "Website có menu sticky, button/card có phản hồi và ít nhất một phần tử dùng absolute đúng cách.",
    homework: [
      "Navbar sticky khi cuộn trang.",
      "Button có hover rõ nhưng vừa phải.",
      "Card có hover bằng shadow, transform hoặc đổi màu nhẹ.",
      "Form có trạng thái focus dễ nhận biết.",
      "Có ít nhất một badge hoặc nhãn nổi dùng position absolute."
    ],
    evaluation: [
      "Position không làm vỡ bố cục.",
      "Hover/transition mượt và vừa phải.",
      "Trạng thái focus không bị xóa.",
      "Hiệu ứng phục vụ trải nghiệm."
    ],
    slides: [
      "Position trong CSS.",
      "Sticky menu và badge nổi.",
      "Pseudo-class cho tương tác.",
      "Demo: hover và focus state."
    ]
  },
  {
    title: "CSS Grid và layout nâng cao",
    goals: [
      "Dùng CSS Grid để dựng bố cục dạng lưới.",
      "Phân biệt khi nào dùng Grid và khi nào dùng Flexbox.",
      "Tạo gallery, danh sách dự án hoặc layout có sidebar."
    ],
    topics: [
      "Grid container và grid item.",
      "display: grid, grid-template-columns, grid-template-rows, gap, grid-column, grid-row.",
      "repeat(), minmax(), auto-fit, auto-fill, fr.",
      "So sánh Flexbox và Grid.",
      "Gallery ảnh, danh sách bài viết/dự án, layout sidebar."
    ],
    teacher: [
      "Dựng gallery ảnh 6 item bằng Grid.",
      "Giải thích repeat(auto-fit, minmax(...)).",
      "Làm mẫu layout blog có bài viết chính và sidebar.",
      "Chỉ ra trường hợp không cần ép dùng Grid."
    ],
    student: [
      "Chọn một section trong project để chuyển sang Grid.",
      "Tạo gallery, danh sách dự án hoặc bài viết.",
      "Thử thay đổi số cột và khoảng cách.",
      "Ghi chú phần nào dùng Flexbox, phần nào dùng Grid."
    ],
    product: "Project có ít nhất một khu vực dùng CSS Grid như gallery, danh sách dự án hoặc sản phẩm.",
    homework: [
      "Tạo section dạng lưới tối thiểu 6 item.",
      "Có khoảng cách đều và bố cục rõ ràng.",
      "Hình ảnh không bị méo.",
      "Tiêu đề và mô tả trong từng item dễ đọc.",
      "Có thể dùng repeat() và minmax() nếu phù hợp."
    ],
    evaluation: [
      "Grid được dùng đúng cho bố cục nhiều hàng/nhiều cột.",
      "Khoảng cách giữa item nhất quán.",
      "Lưới không bị tràn khỏi màn hình.",
      "Nội dung từng item cân đối."
    ],
    slides: [
      "Grid khác Flexbox ở đâu?",
      "Cột, hàng và khoảng cách.",
      "repeat(), minmax(), auto-fit.",
      "Demo: gallery project."
    ]
  },
  {
    title: "Responsive design cho desktop, tablet và mobile",
    goals: [
      "Điều chỉnh website để hiển thị tốt trên nhiều kích thước màn hình.",
      "Viết được media query cơ bản.",
      "Biết kiểm tra lỗi tràn màn hình, chữ nhỏ, ảnh lớn và menu khó dùng."
    ],
    topics: [
      "Responsive design và mobile-first.",
      "Viewport meta tag.",
      "Media query @media.",
      "Breakpoint gợi ý cho mobile, tablet và desktop.",
      "Responsive image: max-width, height auto, object-fit.",
      "Chuyển layout nhiều cột thành một cột trên mobile.",
      "Kiểm tra giao diện bằng DevTools."
    ],
    teacher: [
      "Mở project mẫu ở nhiều kích thước và chỉ ra lỗi.",
      "Viết media query để chuyển hero 2 cột thành 1 cột.",
      "Chỉnh card grid/flex cho mobile.",
      "Hướng dẫn dùng responsive mode trong DevTools."
    ],
    student: [
      "Kiểm tra project trên desktop, tablet và mobile giả lập.",
      "Ghi lại 3 lỗi responsive cần sửa.",
      "Viết media query cho header, hero, card và form.",
      "Kiểm tra lại sau khi chỉnh sửa."
    ],
    product: "Website responsive cơ bản, không tràn ngang trên mobile và các phần chính vẫn đọc được.",
    homework: [
      "Mobile không xuất hiện thanh cuộn ngang.",
      "Header/menu không che nội dung chính.",
      "Hero, card, gallery và form hiển thị gọn trên màn hình nhỏ.",
      "Chữ đủ lớn để đọc trên điện thoại.",
      "Ảnh co giãn đúng tỉ lệ."
    ],
    evaluation: [
      "Có media query phù hợp.",
      "Mobile không bị tràn layout.",
      "Nội dung chính vẫn đầy đủ trên màn hình nhỏ.",
      "Biết dùng DevTools để kiểm tra."
    ],
    slides: [
      "Responsive không chỉ là thu nhỏ.",
      "Viewport và media query.",
      "Các lỗi mobile hay gặp.",
      "Demo: sửa responsive cho landing page."
    ]
  },
  {
    title: "CSS variables, animation và tổ chức mã nguồn",
    goals: [
      "Dùng CSS variables để quản lý màu sắc, font và khoảng cách chính.",
      "Sắp xếp file CSS theo nhóm rõ ràng.",
      "Thêm transition/animation nhẹ mà không làm rối trải nghiệm."
    ],
    topics: [
      "CSS variables: :root, custom property, var().",
      "Tổ chức CSS: base, layout, component, responsive.",
      "Quy tắc đặt tên class dễ hiểu.",
      "transition, transform, animation, @keyframes.",
      "Fade in, slide nhẹ, scale nhỏ, hover button.",
      "Khi nào không nên dùng animation."
    ],
    teacher: [
      "Refactor màu lặp lại thành CSS variables.",
      "Sắp xếp lại file CSS mẫu thành các nhóm có comment ngắn.",
      "Thêm animation vào hero hoặc card rồi điều chỉnh vừa phải.",
      "Review nhanh màu, spacing, tên class và độ dài file CSS."
    ],
    student: [
      "Tạo nhóm biến màu trong :root.",
      "Thay màu lặp lại bằng var().",
      "Sắp xếp lại CSS theo khu vực.",
      "Thêm ít nhất một animation và hai transition."
    ],
    product: "Project có hệ thống màu bằng CSS variables, file CSS gọn hơn và một số hiệu ứng nhẹ.",
    homework: [
      "Dùng CSS variables cho màu chính, màu chữ và màu nền.",
      "CSS có các nhóm base, layout, components, responsive.",
      "Có ít nhất 2 transition và 1 animation bằng @keyframes.",
      "Xóa CSS không dùng hoặc code thử nghiệm.",
      "Kiểm tra lại toàn bộ trang trên trình duyệt."
    ],
    evaluation: [
      "Variables được đặt tên dễ hiểu.",
      "CSS dễ đọc hơn phiên bản trước.",
      "Animation không gây khó chịu.",
      "Giao diện thống nhất về màu và khoảng cách."
    ],
    slides: [
      "CSS variables để quản lý theme.",
      "Tổ chức file CSS dễ bảo trì.",
      "Transition và animation vừa đủ.",
      "Demo: refactor CSS project."
    ]
  },
  {
    title: "Git và GitHub cơ bản",
    goals: [
      "Sử dụng Git để theo dõi thay đổi của project.",
      "Tạo repository trên GitHub và đưa mã nguồn lên.",
      "Hình thành thói quen commit theo từng phần việc nhỏ."
    ],
    topics: [
      "Git là gì, GitHub là gì.",
      "Vì sao cần quản lý phiên bản.",
      "Cài đặt và kiểm tra Git bằng git --version.",
      "git config user.name và user.email.",
      "git init, git status, git add, git commit, git log.",
      "Tạo repository trên GitHub.",
      "remote, branch main và push code."
    ],
    teacher: [
      "Minh họa working directory, staging, commit và remote.",
      "Hướng dẫn kiểm tra Git và cấu hình thông tin cá nhân.",
      "Thực hiện mẫu một commit từ project đã có.",
      "Tạo repository và push code lên GitHub.",
      "Hỗ trợ lỗi đăng nhập, sai remote hoặc push thất bại."
    ],
    student: [
      "Cài đặt hoặc kiểm tra Git trên máy.",
      "Khởi tạo Git trong project cuối khóa.",
      "Tạo commit đầu tiên với message rõ ràng.",
      "Tạo repository GitHub và push project lên.",
      "Kiểm tra file trên giao diện GitHub."
    ],
    product: "Mã nguồn project được quản lý bằng Git và có repository trên GitHub.",
    homework: [
      "Repository có tên rõ ràng.",
      "Có index.html, thư mục CSS và thư mục hình ảnh nếu dùng ảnh.",
      "Có ít nhất 3 commit với message mô tả đúng việc đã làm.",
      "Không đưa file không cần thiết lên repository.",
      "Gửi link repository cho giảng viên."
    ],
    evaluation: [
      "Repository mở được và chứa đúng project.",
      "Commit không dồn toàn bộ vào một lần nếu đã có nhiều thay đổi.",
      "Message commit đủ rõ.",
      "Thực hiện được add, commit, push cơ bản."
    ],
    slides: [
      "Git khác GitHub thế nào?",
      "Working directory, staging, commit, remote.",
      "Các lệnh Git đầu tiên.",
      "Demo: push project lên GitHub."
    ]
  },
  {
    title: "GitHub Pages, README và quy trình hoàn thiện project",
    goals: [
      "Triển khai website tĩnh bằng GitHub Pages.",
      "Viết README đủ thông tin để người khác xem project.",
      "Rà soát project cuối khóa theo quy trình trước khi nộp."
    ],
    topics: [
      "GitHub Pages là gì.",
      "Cách bật GitHub Pages cho repository.",
      "Cấu trúc project: index.html, css/style.css, images, README.md.",
      "README: tên project, mô tả, công nghệ, link demo, ảnh preview, tác giả.",
      "Quy trình chốt nội dung, kiểm tra giao diện, responsive, commit và deploy.",
      "Lỗi deploy thường gặp: sai index.html, sai đường dẫn ảnh, chưa push branch main."
    ],
    teacher: [
      "Bật GitHub Pages cho repository mẫu.",
      "Viết README mẫu ngắn gọn.",
      "Hướng dẫn lập checklist hoàn thiện project.",
      "Review một số project trong lớp theo tiêu chí nộp bài."
    ],
    student: [
      "Bật GitHub Pages cho repository cá nhân.",
      "Viết hoặc hoàn thiện README.md.",
      "Kiểm tra link demo trên trình duyệt.",
      "Sửa lỗi đường dẫn ảnh, CSS hoặc file nếu trang deploy sai.",
      "Chuẩn bị nội dung thuyết trình ngắn."
    ],
    product: "Project có link GitHub Pages hoạt động, repository có README và website đã được rà soát.",
    homework: [
      "Gửi link GitHub repository.",
      "Gửi link GitHub Pages.",
      "README có mô tả project, công nghệ sử dụng và link demo.",
      "Giao diện responsive đã kiểm tra trên mobile.",
      "Chuẩn bị phần trình bày 3-5 phút."
    ],
    evaluation: [
      "GitHub Pages chạy được.",
      "README đủ thông tin cơ bản.",
      "Project không lỗi đường dẫn CSS/ảnh sau khi deploy.",
      "Có kế hoạch trình bày rõ ràng cho buổi 12."
    ],
    slides: [
      "GitHub Pages dùng để làm gì?",
      "Cấu trúc project trước khi deploy.",
      "README viết sao cho đủ?",
      "Demo: deploy và kiểm tra link."
    ]
  },
  {
    title: "Review, hoàn thiện và bảo vệ project cuối khóa",
    goals: [
      "Tổng hợp kỹ năng đã học qua một sản phẩm hoàn chỉnh.",
      "Trình bày website, cách triển khai và quyết định thiết kế chính.",
      "Nhận phản hồi, chỉnh sửa lỗi cuối và xác định hướng học tiếp."
    ],
    topics: [
      "Ôn HTML semantic, CSS selector, box model, Flexbox, Grid.",
      "Responsive design, transition, animation.",
      "Git, GitHub và GitHub Pages.",
      "Checklist website: nội dung, mobile, ảnh, link, form, README, Pages.",
      "Gợi ý học tiếp: JavaScript, DOM, form validation, Bootstrap/Tailwind CSS."
    ],
    teacher: [
      "Tổ chức demo project theo thứ tự hoặc nhóm nhỏ.",
      "Nhận xét từng sản phẩm dựa trên rubric.",
      "Sửa trực tiếp lỗi phổ biến nếu còn thời gian.",
      "Tổng kết năng lực đạt được và gợi ý lộ trình tiếp theo."
    ],
    student: [
      "Trình bày project trong 3-5 phút.",
      "Demo website qua GitHub Pages.",
      "Giải thích bố cục, công nghệ đã dùng và phần tự xử lý.",
      "Ghi nhận phản hồi và hoàn thiện bản nộp cuối."
    ],
    product: "Project cuối khóa hoàn chỉnh gồm website responsive, repository GitHub, link GitHub Pages và README.",
    homework: [
      "Nộp link GitHub repository.",
      "Nộp link GitHub Pages.",
      "Nộp ảnh chụp giao diện desktop và mobile.",
      "Viết mô tả ngắn 5-7 câu về website.",
      "Tự đánh giá 2 điểm làm tốt và 1 điểm muốn cải thiện."
    ],
    evaluation: [
      "Website chạy được và có nội dung hoàn chỉnh.",
      "Giao diện đáp ứng yêu cầu bố cục, màu sắc và responsive.",
      "Mã nguồn và repository được tổ chức rõ.",
      "Phần trình bày cho thấy học viên tham gia thật sự vào quá trình làm."
    ],
    slides: [
      "Checklist bảo vệ project.",
      "Cách demo website trong 3-5 phút.",
      "Rubric chấm điểm.",
      "Hướng học tiếp sau khóa."
    ]
  }
];

const tabs = document.querySelector("#lessonTabs");
const lessonKicker = document.querySelector("#lessonKicker");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonGoals = document.querySelector("#lessonGoals");
const lessonTopics = document.querySelector("#lessonTopics");
const teacherActivities = document.querySelector("#teacherActivities");
const studentActivities = document.querySelector("#studentActivities");
const lessonProduct = document.querySelector("#lessonProduct");
const lessonHomework = document.querySelector("#lessonHomework");
const lessonEvaluation = document.querySelector("#lessonEvaluation");
const lessonCount = document.querySelector("#lessonCount");
const progressFill = document.querySelector("#progressFill");
const slideGrid = document.querySelector("#slideGrid");
const exerciseList = document.querySelector("#exerciseList");
const slideKicker = document.querySelector("#slideKicker");
const slideTitle = document.querySelector("#slideTitle");
const slideFrame = document.querySelector("#slideFrame");
const slideEmpty = document.querySelector("#slideEmpty");
const slideDirectLink = document.querySelector("#slideDirectLink");

function renderList(target, items) {
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderLesson(index) {
  const lesson = lessons[index];
  lessonKicker.textContent = `Buổi ${index + 1}`;
  lessonTitle.textContent = lesson.title;
  lessonProduct.textContent = lesson.product;
  lessonCount.textContent = `${index + 1} / ${lessons.length}`;
  progressFill.style.width = `${((index + 1) / lessons.length) * 100}%`;

  renderList(lessonGoals, lesson.goals);
  renderList(lessonTopics, lesson.topics);
  renderList(teacherActivities, lesson.teacher);
  renderList(studentActivities, lesson.student);
  renderList(lessonHomework, lesson.homework);
  renderList(lessonEvaluation, lesson.evaluation);

  document.querySelectorAll(".lesson-tab").forEach((button, buttonIndex) => {
    const isActive = buttonIndex === index;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

function renderSlideDeck(index) {
  const lesson = lessons[index];
  const hasDeck = Boolean(lesson.embedUrl);

  slideKicker.textContent = `Slide bài ${index + 1}`;
  slideTitle.textContent = lesson.title;
  slideEmpty.hidden = hasDeck;
  slideFrame.hidden = !hasDeck;
  slideDirectLink.hidden = !hasDeck;

  if (hasDeck) {
    slideFrame.src = lesson.embedUrl;
    slideDirectLink.href = lesson.deckUrl || lesson.embedUrl;
  } else {
    slideFrame.removeAttribute("src");
    slideDirectLink.removeAttribute("href");
  }

  document.querySelectorAll(".slide-card").forEach((card, cardIndex) => {
    card.classList.toggle("active", cardIndex === index);
  });
}

lessons.forEach((lesson, index) => {
  const button = document.createElement("button");
  button.className = "lesson-tab";
  button.type = "button";
  button.setAttribute("aria-selected", "false");
  button.innerHTML = `<span>Buổi ${index + 1}</span><strong>${lesson.title}</strong>`;
  button.addEventListener("click", () => renderLesson(index));
  tabs.appendChild(button);
});

slideGrid.innerHTML = lessons.map((lesson, index) => `
  <article class="slide-card">
    <div class="slide-number">Slide ${index + 1}</div>
    <h3>Buổi ${index + 1}: ${lesson.title}</h3>
    <ol>
      ${lesson.slides.map((item) => `<li>${item}</li>`).join("")}
    </ol>
    ${lesson.embedUrl ? `<button class="slide-select" type="button" data-slide-index="${index}">Xuất slide lên khung trình chiếu</button>` : `<span class="slide-note">Chưa gắn file slide</span>`}
  </article>
`).join("");

document.querySelectorAll("[data-slide-index]").forEach((button) => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.slideIndex);
    renderSlideDeck(index);
    document.querySelector("#slides").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

exerciseList.innerHTML = lessons.map((lesson, index) => `
  <article class="exercise-item">
    <div>
      <span>Buổi ${index + 1}</span>
      <h3>${lesson.title}</h3>
    </div>
    <ul>
      ${lesson.homework.slice(0, 4).map((item) => `<li>${item}</li>`).join("")}
    </ul>
  </article>
`).join("");

renderLesson(0);
renderSlideDeck(0);
