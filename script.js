    /* ─────────────────────────────────────────────
    CONFIGURATION
    ───────────────────────────────────────────── */
    const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzEZL87Tw4JZz-NEdg4US01JX3ya5JatZDvhVLMD5V4nxdZxev9tPRo5qItg0RN0FbX/exec";

    /* ─────────────────────────────────────────────
    DATA
    ───────────────────────────────────────────── */
    const ROOMS = [
    { id: "phong-khach",      name: "Phòng khách",          icon: "🛋️" },
    { id: "phong-ngu-master", name: "Phòng ngủ master",      icon: "🛏️" },
    { id: "phong-ngu-phu",   name: "Phòng ngủ phụ",         icon: "🛏️" },
    { id: "bep-ban-an",      name: "Phòng bếp + bàn ăn",    icon: "🍳" },
    { id: "phong-lam-viec",  name: "Phòng làm việc",         icon: "💼" },
    { id: "phong-tam",       name: "Phòng tắm",              icon: "🛁" },
    { id: "ban-cong",        name: "Ban công / sân vườn",    icon: "🌿" },
    { id: "hanh-lang",       name: "Hành lang / sảnh",       icon: "🚪" }
    ];

    const PHONG_CACH = [
    { id: "co-dien",      name: "Cổ điển (Classical)",             img: "assets/pc/pc1.jpg" },
    { id: "tan-co-dien", name: "Tân cổ điển (Neoclassical)",       img: "assets/pc/pc2.jpg" },
    { id: "hien-dai",    name: "Hiện đại (Modern)",                img: "assets/pc/pc3.jpg" },
    { id: "toi-gian",    name: "Tối giản (Minimalism)",            img: "assets/pc/pc4.png" },
    { id: "cong-nghiep", name: "Công nghiệp (Industrial)",         img: "assets/pc/pc5.png" },
    { id: "bac-au",      name: "Bắc Âu (Scandinavian)",            img: "assets/pc/pc6.png" },
    { id: "dia-trung-hai", name: "Địa Trung Hải (Mediterranean)",  img: "assets/pc/pc7.png" },
    { id: "nhat-ban",    name: "Nhật Bản (Japanese Zen)",          img: "assets/pc/pc8.png" },
    { id: "duong-dai",   name: "Đương đại (Contemporary)",         img: "assets/pc/pc9.png" },
    { id: "rustic",      name: "Rustic (Mộc mạc)",                 img: "assets/pc/pc10.png" },
    { id: "co-dien-2",     name: "Cổ điển (Classical)",        img: "assets/pc/pc11.jpg" },
    { id: "modern-2",      name: "Modern (Hiện đại)",           img: "assets/pc/pc12.png" },
    { id: "minimalism-2",  name: "Minimalism (Tối giản)",       img: "assets/pc/pc13.png" },
    { id: "scandinavian-2",name: "Scandinavian",                img: "assets/pc/pc14.png" },
    { id: "industrial-2",  name: "Industrial",                  img: "assets/pc/pc15.png" },
    { id: "vintage-retro", name: "Vintage / Retro",             img: "assets/pc/pc16.png" },
    { id: "indochine",     name: "Indochine (Đông Dương)",      img: "assets/pc/pc17.png" },
    { id: "wabi-sabi",     name: "Wabi Sabi (Nhật)",            img: "assets/pc/pc18.png" },
    { id: "japandi",       name: "Japandi (Nhật + Bắc Âu)",    img: "assets/pc/pc19.png" },
    { id: "eclectic",      name: "Eclectic (Chiết trung)",      img: "assets/pc/pc20.png" }
    ];

    const COLOUR_COMBO = [
    {
        id: "tra-sua-ho-dao",
        name: "Trà sữa & Nâu hồ đào",
        img: "assets/color/color1.jpg",
        colors: [
    { hex: "#D4C6B2", name: "Màu Trà sữa" },
    { hex: "#5A341E", name: "Nâu hồ đào" },
    { hex: "#6A4C2A", name: "Gỗ óc chó nhạt" },
    { hex: "#AAA39A", name: "Xám nhạt" }
        ]
    },
    {
        id: "nau-quy-ong-kem-bo",
        name: "Nâu quý ông & Kem bơ",
        img: "assets/color/color2.jpg",
        colors: [
    { hex: "#1B0E00", name: "Nâu Quý ông" },
    { hex: "#D2C39D", name: "Trắng kem bơ" },
    { hex: "#9C651C", name: "Nâu hạt dẻ" },
    { hex: "#7A6B38", name: "Xanh rêu nhạt" }
        ]
    },
    {
        id: "tra-sua-go-oc-cho-dam",
        name: "Trà sữa & Gỗ óc chó đậm",
        img: "assets/color/color3.jpg",
        colors: [
    { hex: "#D6CFC2", name: "Màu Trà Sữa" },
    { hex: "#674C3D", name: "Gỗ óc chó đậm" },
    { hex: "#CCAE8C", name: "Nâu hạt dẻ" },
    { hex: "#D7C6AF", name: "Xám trà sữa" }
        ]
    },
    {
        id: "tra-sua-trang-nga-oc-cho",
        name: "Trà sữa & Trắng ngà",
        img: "assets/color/color4.jpg",
        colors: [
    { hex: "#B99A78", name: "Màu Trà sữa" },
    { hex: "#E8DCCB", name: "Trắng ngà" },
    { hex: "#DEC9BE", name: "Nâu nhạt" },
    { hex: "#88502C", name: "Nâu óc chó" }
        ]
    },
    {
        id: "tra-sua-go-oc-cho",
        name: "Trà sữa & Gỗ óc chó",
        img: "assets/color/color5.jpg",
        colors: [
    { hex: "#D2C1AD", name: "Màu Trà Sữa" },
    { hex: "#593426", name: "Gỗ óc chó" },
    { hex: "#B19675", name: "Nâu nhạt" },
    { hex: "#A68162", name: "Gỗ óc chó nhạt" }
        ]
    },
    {
        id: "xam-tham-den-kim-cuong",
        name: "Xám thẫm & Đen kim cương",
        img: "assets/color/color6.jpg",
        colors: [
    { hex: "#4B433F", name: "Xám thẫm" },
    { hex: "#010500", name: "Đen kim cương" },
    { hex: "#9A8172", name: "Nâu Jeep" },
    { hex: "#DED8C3", name: "Màu Trà sữa" }
        ]
    },
    {
        id: "tra-sua-xam-quy-ong",
        name: "Trà sữa & Xám Quý ông",
        img: "assets/color/color7.jpg",
        colors: [
    { hex: "#E6D9C7", name: "Màu Trà sữa" },
    { hex: "#565A53", name: "Xám Quý ông" },
    { hex: "#C9B99F", name: "Trắng nhạt" },
    { hex: "#B9AEA5", name: "Xám be" }
        ]
    },
    {
        id: "be-xam-ho-phach",
        name: "Be xám & Hồ phách",
        img: "assets/color/color8.jpg",
        colors: [
    { hex: "#C2BF96", name: "Be xám lá hiền" },
    { hex: "#7C5D2E", name: "Nâu gỗ sồi vàng" },
    { hex: "#4F5A25", name: "Xanh ô-liu rêu" },
    { hex: "#FC8E05", name: "Hổ phách sáng" }
        ]
    },
    {
        id: "espresso-gach-taupe",
        name: "Espresso & Gạch rỉ",
        img: "assets/color/color9.jpg",
        colors: [
    { hex: "#1B1814", name: "Nâu espresso trầm" },
    { hex: "#442F24", name: "Nâu cà phê đậm" },
    { hex: "#6B3021", name: "Nâu gạch rỉ" },
    { hex: "#9C9688", name: "Xám taupe tro" }
        ]
    },
    {
        id: "nau-do-ruou-olive",
        name: "Nâu đỏ & Đỏ rượu",
        img: "assets/color/color10.jpg",
        colors: [
    { hex: "#42190D", name: "Nâu đỏ đậm" },
    { hex: "#4A0613", name: "Đỏ rượu vang trầm" },
    { hex: "#2B2416", name: "Nâu olive đậm" },
    { hex: "#B06B2B", name: "Nâu gạch cam" }
        ]
    },
    {
        id: "hat-de-caramel-nga-hong",
        name: "Hạt dẻ & Caramel",
        img: "assets/color/color11.jpg",
        colors: [
    { hex: "#2E0D06", name: "Nâu hạt dẻ trầm" },
    { hex: "#B1A589", name: "Be cát sa thạch" },
    { hex: "#916941", name: "Nâu caramel gỗ sồi" },
    { hex: "#EBD9C8", name: "Ngà hồng phấn" }
        ]
    },
    {
        id: "oc-cho-vang-mat-ong",
        name: "Óc chó & Vàng mật ong",
        img: "assets/color/color12.jpg",
        colors: [
    { hex: "#60422C", name: "Nâu óc chó" },
    { hex: "#B1A589", name: "Be cát sa thạch" },
    { hex: "#F4B949", name: "Vàng mật ong" },
    { hex: "#384715", name: "Xanh rêu rừng" }
        ]
    },
    {
        id: "den-than-xanh-teal",
        name: "Đen than & Xanh teal",
        img: "assets/color/color13.jpg",
        colors: [
    { hex: "#0D0C08", name: "Đen than khói" },
    { hex: "#5B787D", name: "Xanh teal thép" },
    { hex: "#61301B", name: "Nâu cacao đậm" },
    { hex: "#7B020F", name: "Đỏ gạch sẫm" }
        ]
    },
    {
        id: "den-nau-sam-go-gu",
        name: "Đen nâu sẫm & Nâu đỏ gụ",
        img: "assets/color/color14.jpg",
        colors: [
    { hex: "#17110F", name: "Đen nâu sẫm" },
    { hex: "#321F1D", name: "Nâu đỏ gụ trầm" },
    { hex: "#BEADA3", name: "Be hạnh nhân ấm" },
    { hex: "#9F806D", name: "Nâu caramel trầm nhẹ" }
        ]
    },
    {
        id: "nau-xam-tro-xam-reu",
        name: "Nâu xám tro & Xám rêu",
        img: "assets/color/color15.jpg",
        colors: [
    { hex: "#6B6260", name: "Nâu xám tro ấm" },
    { hex: "#343734", name: "Xám đậm pha rêu" },
    { hex: "#D7D5D1", name: "Xám đá sáng" },
    { hex: "#553924", name: "Nâu hạt dẻ đậm" }
        ]
    },
    {
        id: "vang-dong-den",
        name: "Vàng đồng & Đen",
        img: "assets/color/color16.jpg",
        colors: [
    { hex: "#BC864E", name: "Vàng đồng ánh hổ phách" },
    { hex: "#030300", name: "Đen" },
    { hex: "#CCC5BA", name: "Be xám ấm" },
    { hex: "#8D7662", name: "Nâu đất pha xám" }
        ]
    },
    {
        id: "xam-than-xanh-thep",
        name: "Xám than & Xanh thép",
        img: "assets/color/color17.jpg",
        colors: [
    { hex: "#393937", name: "Xám than đậm" },
    { hex: "#465159", name: "Xanh xám thép trầm" },
    { hex: "#DDD9D4", name: "Trắng xám ấm" },
    { hex: "#B1B2B9", name: "Xám xanh nhạt" }
        ]
    },
    {
        id: "do-gach-be-nau",
        name: "Đỏ gạch & Be nâu",
        img: "assets/color/color18.jpg",
        colors: [
    { hex: "#8D433F", name: "Đỏ nâu gạch trầm" },
    { hex: "#AA8773", name: "Be nâu ánh đồng nhẹ" },
    { hex: "#EEE3D2", name: "Be kem rất sáng" },
    { hex: "#9F9483", name: "Xám be trầm nhẹ" }
        ]
    },
    {
        id: "xam-dam-cam-pha-xam",
        name: "Xám đậm & Cam pha xám",
        img: "assets/color/color19.jpg",
        colors: [
    { hex: "#2E2C28", name: "Xám đậm" },
    { hex: "#958472", name: "Cam pha xám" },
    { hex: "#E1DDDC", name: "Xám ngà" },
    { hex: "#A8B5C6", name: "Xanh xám lạnh" }
        ]
    },
    {
        id: "nau-ca-phe-xam-olive",
        name: "Nâu cà phê & Xám olive",
        img: "assets/color/color20.jpg",
        colors: [
    { hex: "#392318", name: "Nâu cà phê đậm" },
    { hex: "#333431", name: "Xám đậm pha olive" },
    { hex: "#B8B1A8", name: "Be đá pha xám" },
    { hex: "#211910", name: "Đen pha xanh rêu sẫm" }
        ]
    },
    {
        id: "do-ruou-xanh-olive",
        name: "Đỏ rượu & Xanh olive",
        img: "assets/color/color21.jpg",
        colors: [
    { hex: "#491412", name: "Đỏ rượu vang trầm" },
    { hex: "#211B18", name: "Xanh olive gần đen" },
    { hex: "#B2A69A", name: "Be xám pha nâu" },
    { hex: "#846342", name: "Nâu đồng ánh kim nhẹ" }
        ]
    },
    {
        id: "do-nau-olive-vang",
        name: "Đỏ nâu & Nâu olive",
        img: "assets/color/color22.jpg",
        colors: [
    { hex: "#6D2408", name: "Đỏ nâu trầm" },
    { hex: "#5D5636", name: "Nâu olive pha xám" },
    { hex: "#DFCFB4", name: "Be sáng pha vàng nhẹ" },
    { hex: "#E3C28D", name: "Vàng ánh kim nhẹ" }
        ]
    }
    ];

    const MATERIALS = [
    {
        id: "go-tu-nhien", name: "Gỗ tự nhiên",
        img: "assets/vatlieu/gotunhien/gotunhien.jpg",
        types: [
    { id: "walnut",    name: "Walnut",    img: "assets/vatlieu/gotunhien/1.jpg" },
    { id: "cedar",     name: "Cedar",     img: "assets/vatlieu/gotunhien/2.jpg" },
    { id: "teak",      name: "Teak",      img: "assets/vatlieu/gotunhien/3.jpg" },
    { id: "blackwood", name: "Blackwood", img: "assets/vatlieu/gotunhien/4.jpg" },
    { id: "fir",       name: "Fir",       img: "assets/vatlieu/gotunhien/5.jpg" },
    { id: "pine",      name: "Pine",      img: "assets/vatlieu/gotunhien/6.jpg" },
    { id: "cumaru",    name: "Cumaru",    img: "assets/vatlieu/gotunhien/7.jpg" },
    { id: "hicory",    name: "Hicory",    img: "assets/vatlieu/gotunhien/8.jpg" },
    { id: "mahogany",  name: "Mahogany",  img: "assets/vatlieu/gotunhien/9.jpg" },
    { id: "beech",     name: "Beech",     img: "assets/vatlieu/gotunhien/11.jpg" },
    { id: "zebrano",   name: "Zebrano",   img: "assets/vatlieu/gotunhien/12.jpg" },
    { id: "birch",     name: "Birch",     img: "assets/vatlieu/gotunhien/13.jpg" },
    { id: "monkeypod", name: "Monkeypod", img: "assets/vatlieu/gotunhien/14.jpg" },
    { id: "alder",     name: "Alder",     img: "assets/vatlieu/gotunhien/15.jpg" },
    { id: "ebony",     name: "Ebony",     img: "assets/vatlieu/gotunhien/16.jpg" },
    { id: "cherry",    name: "Cherry",    img: "assets/vatlieu/gotunhien/17.jpg" },
    { id: "maple",     name: "Maple",     img: "assets/vatlieu/gotunhien/18.jpg" },
    { id: "rosewood",  name: "Rosewood",  img: "assets/vatlieu/gotunhien/19.jpg" },
    { id: "oak",       name: "Oak",       img: "assets/vatlieu/gotunhien/20.jpg" },
    { id: "kingwood",  name: "Kingwood",  img: "assets/vatlieu/gotunhien/21.jpg" }
        ]
    },
    {
        id: "go-cong-nghiep", name: "Gỗ công nghiệp",
        img: "assets/vatlieu/gocongnghiep/gocongnghiep.jpg",
        types: [
    { id: "walnut",    name: "Walnut",    img: "assets/vatlieu/gocongnghiep/1.1.jpg" },
    { id: "cedar",     name: "Cedar",     img: "assets/vatlieu/gocongnghiep/2.2.jpg" },
    { id: "teak",      name: "Teak",      img: "assets/vatlieu/gocongnghiep/3.3.jpg" },
    { id: "blackwood", name: "Blackwood", img: "assets/vatlieu/gocongnghiep/4.4.jpg" },
    { id: "fir",       name: "Fir",       img: "assets/vatlieu/gocongnghiep/5.5.jpg" },
    { id: "pine",      name: "Pine",      img: "assets/vatlieu/gocongnghiep/6.6.jpg" },
    { id: "cumaru",    name: "Cumaru",    img: "assets/vatlieu/gocongnghiep/7.7.jpg" },
    { id: "hicory",    name: "Hicory",    img: "assets/vatlieu/gocongnghiep/8.8.jpg" },
    { id: "mahogany",  name: "Mahogany",  img: "assets/vatlieu/gocongnghiep/9.9.jpg" },
    { id: "beech",     name: "Beech",     img: "assets/vatlieu/gocongnghiep/11.11.jpg" },
    { id: "zebrano",   name: "Zebrano",   img: "assets/vatlieu/gocongnghiep/12.12.jpg" },
    { id: "birch",     name: "Birch",     img: "assets/vatlieu/gocongnghiep/13.13.jpg" },
    { id: "monkeypod", name: "Monkeypod", img: "assets/vatlieu/gocongnghiep/14.14.jpg" },
    { id: "alder",     name: "Alder",     img: "assets/vatlieu/gocongnghiep/15.15.jpg" },
    { id: "ebony",     name: "Ebony",     img: "assets/vatlieu/gocongnghiep/16.16.jpg" },
    { id: "cherry",    name: "Cherry",    img: "assets/vatlieu/gocongnghiep/17.17.jpg" },
    { id: "maple",     name: "Maple",     img: "assets/vatlieu/gocongnghiep/18.18.jpg" },
    { id: "rosewood",  name: "Rosewood",  img: "assets/vatlieu/gocongnghiep/19.19.jpg" },
    { id: "oak",       name: "Oak",       img: "assets/vatlieu/gocongnghiep/20.20.jpg" },
    { id: "kingwood",  name: "Kingwood",  img: "assets/vatlieu/gocongnghiep/21.21.jpg" }
        ]
    },
    {
        id: "kinh", name: "Kính",
        img: "assets/vatlieu/kinh/kinh.jpg",
        types: []
    },
    {
        id: "da", name: "Đá",
        img: "assets/vatlieu/da/da.jpg",
        types: [
    { id: "fairy-white",       name: "Fairy White",           img: "assets/vatlieu/da/31.jpg" },
    { id: "fantasy-gray",      name: "Fantasy Gray",          img: "assets/vatlieu/da/32.jpg" },
    { id: "fossil-brown",      name: "Fossil Brown",          img: "assets/vatlieu/da/33.jpg" },
    { id: "fossil-gray",       name: "Fossil Gray",           img: "assets/vatlieu/da/34.jpg" },
    { id: "frost-white",       name: "Frost White",           img: "assets/vatlieu/da/35.jpg" },
    { id: "marbella-white",    name: "Marbella White",        img: "assets/vatlieu/da/36.jpg" },
    { id: "marquina-midnight", name: "Marquina Midnight",     img: "assets/vatlieu/da/37.jpg" },
    { id: "meridian-gray",     name: "Meridian Gray",         img: "assets/vatlieu/da/38.jpg" },
    { id: "midnight-corvo",    name: "Midnight Corvo",        img: "assets/vatlieu/da/39.jpg" },
    { id: "midnight-majesty",  name: "Midnight Majesty",      img: "assets/vatlieu/da/40.jpg" },
    { id: "galant-gray",       name: "Galant Gray",           img: "assets/vatlieu/da/41.jpg" },
    { id: "glacier-white",     name: "Glacier White",         img: "assets/vatlieu/da/42.jpg" },
    { id: "gray-lagoon",       name: "Gray Lagoon",           img: "assets/vatlieu/da/43.jpg" },
    { id: "hazelwood",         name: "Hazelwood",             img: "assets/vatlieu/da/44.jpg" },
    { id: "iced-gray",         name: "Iced Gray",             img: "assets/vatlieu/da/45.jpg" },
    { id: "mirano-gray",       name: "Mirano Gray",           img: "assets/vatlieu/da/46.jpg" },
    { id: "montclair-white",   name: "Montclair White",       img: "assets/vatlieu/da/47.jpg" },
    { id: "mystic-gray",       name: "Mystic Gray",           img: "assets/vatlieu/da/48.jpg" },
    { id: "new-calacatta",     name: "New Calacatta Laza",    img: "assets/vatlieu/da/49.jpg" },
    { id: "iced-white",        name: "Iced White",            img: "assets/vatlieu/da/50.jpg" },
    { id: "lido-blanco",       name: "Lido Blanco",           img: "assets/vatlieu/da/51.jpg" },
    { id: "macabo-gray",       name: "Macabo Gray",           img: "assets/vatlieu/da/52.jpg" },
    { id: "manhattan-gray",    name: "Manhattan Gray",        img: "assets/vatlieu/da/53.jpg" },
    { id: "mara-blanca",       name: "Mara Blanca",           img: "assets/vatlieu/da/54.jpg" },
    { id: "new-carrara",       name: "New Carrara Marmi",     img: "assets/vatlieu/da/55.jpg" },
    { id: "pacific-salt",      name: "Pacific Salt",          img: "assets/vatlieu/da/56.jpg" },
    { id: "pearl-gray",        name: "Pearl Gray",            img: "assets/vatlieu/da/57.jpg" },
    { id: "pebble-rock",       name: "Pebble Rock",           img: "assets/vatlieu/da/58.jpg" },
    { id: "peppercorn-white",  name: "Peppercorn White",      img: "assets/vatlieu/da/59.jpg" },
    { id: "perla-white",       name: "Perla White",           img: "assets/vatlieu/da/60.jpg" },
    { id: "fossil-gray-matte-finish",      name: "Fossil Gray Matte Finish",      img: "assets/vatlieu/da/61.jpg" },
    { id: "gray-lagoon-concrete-finish",   name: "Gray Lagoon Concrete Finish",   img: "assets/vatlieu/da/62.jpg" },
    { id: "midnight-corvo-concrete-finish", name: "Midnight Corvo Concrete Finish", img: "assets/vatlieu/da/63.jpg" },
    { id: "midnight-majesty-concrete-finish", name: "Midnight Majesty Concrete Finish", img: "assets/vatlieu/da/64.jpg" },
    { id: "new-calacatta-laza-gold",       name: "New Calacatta Laza Gold",       img: "assets/vatlieu/da/65.jpg" },
    { id: "lumataj",           name: "Lumataj",               img: "assets/vatlieu/da/66.jpg" },
    { id: "uyuni",             name: "UYUNI",                 img: "assets/vatlieu/da/1.jpg" },
    { id: "nayla",             name: "NAYLA",                 img: "assets/vatlieu/da/2.jpg" },
    { id: "zenith",            name: "ZÉNITH",                img: "assets/vatlieu/da/3.jpg" },
    { id: "kairos",            name: "KAIROS",                img: "assets/vatlieu/da/4.jpg" },
    { id: "opera",             name: "OPERA",                 img: "assets/vatlieu/da/5.jpg" },
    { id: "rem",               name: "REM",                   img: "assets/vatlieu/da/6.jpg" },
    { id: "entzo",             name: "ENTZO",                 img: "assets/vatlieu/da/7.jpg" },
    { id: "aura-15",           name: "AURA 15",               img: "assets/vatlieu/da/8.jpg" },
    { id: "nilium",            name: "NILIUM",                img: "assets/vatlieu/da/9.jpg" },
    { id: "blanc-concrete",    name: "BLANC CONCRETE",        img: "assets/vatlieu/da/10.jpg" },
    { id: "makai",             name: "MAKAI",                 img: "assets/vatlieu/da/11.jpg" },
    { id: "lunar",             name: "LUNAR",                 img: "assets/vatlieu/da/12.jpg" },
    { id: "aeris",             name: "AERIS",                 img: "assets/vatlieu/da/13.jpg" },
    { id: "danae",             name: "DANAE",                 img: "assets/vatlieu/da/14.jpg" },
    { id: "edora",             name: "EDORA",                 img: "assets/vatlieu/da/15.jpg" },
    { id: "sasea",             name: "SASEA",                 img: "assets/vatlieu/da/16.jpg" },
    { id: "keon",              name: "KEON",                  img: "assets/vatlieu/da/17.jpg" },
    { id: "portum",            name: "PORTUM",                img: "assets/vatlieu/da/18.jpg" },
    { id: "kovik",             name: "KOVIK",                 img: "assets/vatlieu/da/19.jpg" },
    { id: "galema",            name: "GALEMA",                img: "assets/vatlieu/da/20.jpg" },
    { id: "strato",            name: "STRATO",                img: "assets/vatlieu/da/21.jpg" },
    { id: "sirocco",           name: "SIROCCO",               img: "assets/vatlieu/da/22.jpg" },
    { id: "kreta",             name: "KRETA",                 img: "assets/vatlieu/da/23.jpg" },
    { id: "soke",              name: "SOKE",                  img: "assets/vatlieu/da/24.jpg" },
    { id: "vera",              name: "VERA",                  img: "assets/vatlieu/da/25.jpg" },
    { id: "orix",              name: "ORIX",                  img: "assets/vatlieu/da/26.jpg" },
    { id: "kira",              name: "KIRA",                  img: "assets/vatlieu/da/27.jpg" },
    { id: "trilium",           name: "TRILIUM",               img: "assets/vatlieu/da/28.jpg" },
    { id: "milar",             name: "MILAR",                 img: "assets/vatlieu/da/29.jpg" },
    { id: "keranium",          name: "KERANIUM",              img: "assets/vatlieu/da/30.jpg" }
        ]
    },
    {
        id: "inox", name: "Inox",
        img: "assets/vatlieu/inox/inox.jpg",
        types: []
    },
    {
        id: "vai", name: "Vải",
        img: "assets/vatlieu/vai/vai.jpg",
        types: [
    { id: "c-21540-04", name: "C-21540-04", img: "assets/vatlieu/vai/1.jpg" },
    { id: "c-21540-31", name: "C-21540-31", img: "assets/vatlieu/vai/2.jpg" },
    { id: "c-21540-27", name: "C-21540-27", img: "assets/vatlieu/vai/3.jpg" },
    { id: "c-21540-23", name: "C-21540-23", img: "assets/vatlieu/vai/4.jpg" },
    { id: "c-21540-02", name: "C-21540-02", img: "assets/vatlieu/vai/5.jpg" },
    { id: "c-21540-08", name: "C-21540-08", img: "assets/vatlieu/vai/6.jpg" },
    { id: "c-21540-18", name: "C-21540-18", img: "assets/vatlieu/vai/7.jpg" },
    { id: "c-21540-48", name: "C-21540-48", img: "assets/vatlieu/vai/8.jpg" },
    { id: "c-21540-49", name: "C-21540-49", img: "assets/vatlieu/vai/9.jpg" },
    { id: "c-21540-19", name: "C-21540-19", img: "assets/vatlieu/vai/10.jpg" },
    { id: "fabric-915",    name: "915",    img: "assets/vatlieu/vai/11.jpg" },
    { id: "fabric-916",    name: "916",    img: "assets/vatlieu/vai/12.jpg" },
    { id: "fabric-903",    name: "903",    img: "assets/vatlieu/vai/13.jpg" },
    { id: "fabric-191269", name: "191269", img: "assets/vatlieu/vai/14.jpg" },
    { id: "fabric-ecru",   name: "ECRU",   img: "assets/vatlieu/vai/15.jpg" },
    { id: "fabric-004",    name: "004",    img: "assets/vatlieu/vai/16.jpg" },
    { id: "fabric-2101",   name: "2101",   img: "assets/vatlieu/vai/17.jpg" },
    { id: "fabric-1701",   name: "1701",   img: "assets/vatlieu/vai/18.jpg" }
        ]
    }
    ];

    const MAU_SAC = [
    { id: "trang-kem",  name: "Trắng kem",  color: "#F5F0E8" },
    { id: "xam-nhat",   name: "Xám nhạt",   color: "#C8C8C8" },
    { id: "nau-go",     name: "Nâu gỗ",     color: "#8B5E3C" },
    { id: "xanh-reu",   name: "Xanh rêu",   color: "#6B7C5C" },
    { id: "xanh-navy",  name: "Xanh navy",  color: "#1B2F5B" },
    { id: "den-trang",  name: "Đen trắng",  color: "#1A1A1A" },
    { id: "hong-nude",  name: "Hồng nude",  color: "#D4A5A5" },
    { id: "tuy-chinh",  name: "Tùy chỉnh",  color: null }
    ];

    const MAX_KHAOSAT_IMAGES = 10;
    const MAX_KHAOSAT_IMAGE_MB = 5;

    const UU_TIEN_PHAN_BO_OPTIONS = ["Phần thô", "Nội thất", "Cảnh quan", "Cân bằng các hạng mục"];
    const MUC_HOAN_THIEN_OPTIONS = ["Basic", "Tiêu chuẩn", "Cao cấp"];

    /* ─────────────────────────────────────────────
    STATE
    ───────────────────────────────────────────── */
    const state = {
    ho_ten: "", so_dien_thoai: "", email: "", dia_chi: "", dien_tich: "", nguon_khach: "",
    ho_so_nguoi_dung: "", email_ho_so: "",
    chu_dau_tu: "", loai_cong_trinh: "",
    selected_rooms: [],
    room_details: {},
    ngan_sach: "", thoi_gian_thi_cong: "", yeu_cau_dac_biet: "",
    uu_tien_phan_bo: "", muc_hoan_thien: "", cac_moc_quan_trong: "",
    khao_sat_phong_cach: "", khao_sat_hinh_anh: "", khao_sat_khong_gian: "",
    khao_sat_hinh_anh_files: [],
    thoi_quen: [], so_thich: [],
    ly_do: "", ky_vong: [], uu_tien: "",
    phong_cach: [], colour_combo: [],
    materials: {}
};

    function ensureRoomState(roomId) {
    if (!state.room_details[roomId])
    state.room_details[roomId] = { dien_tich: "", yeu_cau: [], yeu_cau_khac: "" };
}

    /* ─────────────────────────────────────────────
    RENDER: ROOM GRID (Step 2)
    ───────────────────────────────────────────── */
    function renderRooms() {
    const container = document.getElementById("grid-rooms");
    container.innerHTML = "";
    ROOMS.forEach(room => {
    const el = document.createElement("div");
    el.className = "room-check-item";
    el.dataset.id = room.id;
    el.innerHTML = `<span class="room-icon">${room.icon}</span><span class="room-label">${room.name}</span>`;
    el.addEventListener("click", () => {
    const checked = el.classList.toggle("checked");
    if (checked) { if (!state.selected_rooms.includes(room.id)) state.selected_rooms.push(room.id); }
    else          { state.selected_rooms = state.selected_rooms.filter(id => id !== room.id); }
    toggleRoom(room.id, checked);
    showErr("err-rooms", false);
});
    container.appendChild(el);
});
}

    /* ─────────────────────────────────────────────
    TOGGLE ROOM PANEL (Step 3)
    ───────────────────────────────────────────── */
    function toggleRoom(roomId, checked) {
    const container = document.getElementById("room-details-container");
    const empty     = document.getElementById("step3-empty");
    if (checked) {
    ensureRoomState(roomId);
    const room  = ROOMS.find(r => r.id === roomId);
    const panel = buildRoomPanel(room);
    const order = ROOMS.map(r => r.id);
    let inserted = false;
    container.querySelectorAll(".room-panel[data-room-id]").forEach(sib => {
    if (!inserted && order.indexOf(sib.dataset.roomId) > order.indexOf(roomId)) {
    container.insertBefore(panel, sib); inserted = true;
}
});
    if (!inserted) container.appendChild(panel);
} else {
    const existing = container.querySelector(`.room-panel[data-room-id="${roomId}"]`);
    if (existing) existing.remove();
    delete state.room_details[roomId];
}
    empty.style.display = state.selected_rooms.length === 0 ? "block" : "none";
}

    /* ─────────────────────────────────────────────
    BUILD ROOM PANEL
    ───────────────────────────────────────────── */
    function buildRoomPanel(room) {
    const panel = document.createElement("details");
    panel.className = "room-panel";
    panel.open = true;
    panel.dataset.roomId = room.id;
    panel.innerHTML = `
        <summary class="room-panel-summary">
          <span class="rp-icon">${room.icon}</span>
          <span>${room.name}</span>
          <svg class="rp-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <div class="room-panel-body">
          <div class="field-group" style="margin-top:14px;">
            <label>Diện tích dự kiến (m²)</label>
            <input type="number" id="dientich-${room.id}" placeholder="m²" min="1" />
          </div>
          <div class="field-group" style="margin-top:12px;">
            <label>Yêu cầu đặc biệt</label>
            <div class="checkbox-grid" id="yeu-cau-grid-${room.id}"></div>
            <input type="text" id="yeu-cau-khac-${room.id}" class="other-input" placeholder="Nhập yêu cầu khác..." style="display:none;">
          </div>
        </div>`;
    setTimeout(() => renderRoomYeuCau(room.id), 0);
    return panel;
}

    function renderRoomYeuCau(roomId) {
    const d = state.room_details[roomId];
    const container = document.getElementById("yeu-cau-grid-" + roomId);
    if (!container || !d) return;
    const options = ["Phòng kín", "Cần cách âm", "Cần linh hoạt chuyển đổi", "Phong thủy", "Kỹ thuật riêng (smart home, năng lượng mặt trời...)", "Khác"];
    container.innerHTML = "";
    options.forEach(opt => {
    const item = document.createElement("div");
    item.className = "checkbox-item" + (d.yeu_cau.includes(opt) ? " checked" : "");
    item.innerHTML = `<div class="checkbox-box"><svg viewBox="0 0 10 8"><polyline points="1,4 3.5,7 9,1"/></svg></div><span class="checkbox-label">${opt}</span>`;
    item.addEventListener("click", () => {
    const idx = d.yeu_cau.indexOf(opt);
    if (idx === -1) { d.yeu_cau.push(opt); item.classList.add("checked"); }
    else            { d.yeu_cau.splice(idx, 1); item.classList.remove("checked"); }
    if (opt === "Khác") {
    const inp = document.getElementById("yeu-cau-khac-" + roomId);
    if (inp) { inp.style.display = item.classList.contains("checked") ? "block" : "none"; if (!item.classList.contains("checked")) inp.value = ""; }
}
});
    container.appendChild(item);
});
}

    /* ─────────────────────────────────────────────
    RENDER: RADIO GROUPS (Step 4)
    ───────────────────────────────────────────── */
    function renderRadios(containerId, options, stateKey) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    options.forEach(opt => {
    const item = document.createElement("div");
    item.className = "radio-item" + (state[stateKey] === opt ? " selected" : "");
    item.innerHTML = `<div class="radio-dot"></div><span class="radio-text">${opt}</span>`;
    item.addEventListener("click", () => {
    state[stateKey] = opt;
    container.querySelectorAll(".radio-item").forEach(el => el.classList.remove("selected"));
    item.classList.add("selected");
});
    container.appendChild(item);
});
}

    /* ─────────────────────────────────────────────
    VALIDATION
    ───────────────────────────────────────────── */
    function showErr(id, show) { const el = document.getElementById(id); if (el) el.classList.toggle("visible", show); }
    function markField(id, error) { const el = document.getElementById(id); if (el) el.classList.toggle("error", error); }

    function validateStep1() {
    const hoSoNguoiDung = document.getElementById("f-ho-so-nguoi-dung")?.value.trim() || "";
    const ten = document.getElementById("f-ten")?.value.trim() || "";
    const sdt = document.getElementById("f-sdt")?.value.trim() || "";
    const email = document.getElementById("f-email")?.value.trim() || "";
    const emailHoSo = document.getElementById("f-email-ho-so")?.value.trim() || "";
    const diachi = document.getElementById("f-diachi")?.value.trim() || "";
    const dientich = document.getElementById("f-dientich")?.value.trim() || "";
    let ok = true;

    const noHoSo = !hoSoNguoiDung;
    markField("f-ho-so-nguoi-dung", noHoSo);
    showErr("err-ho-so-nguoi-dung", noHoSo);
    if (noHoSo) ok = false;

    const noTen = !ten;
    markField("f-ten", noTen);
    showErr("err-ten", noTen);
    if (noTen) ok = false;

    const noSdt = !sdt || !/^(0|\+84)[0-9]{8,10}$/.test(sdt.replace(/\s/g, ""));
    markField("f-sdt", noSdt);
    showErr("err-sdt", noSdt);
    if (noSdt) ok = false;

    if (email) {
    const badEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    markField("f-email", badEmail);
    showErr("err-email", badEmail);
    if (badEmail) ok = false;
} else {
    markField("f-email", false);
    showErr("err-email", false);
}

    if (emailHoSo) {
    const badHoSo = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailHoSo);
    markField("f-email-ho-so", badHoSo);
    showErr("err-email-ho-so", badHoSo);
    if (badHoSo) ok = false;
} else {
    markField("f-email-ho-so", false);
    showErr("err-email-ho-so", false);
}

    const noDiachi = !diachi;
    markField("f-diachi", noDiachi);
    showErr("err-diachi", noDiachi);
    if (noDiachi) ok = false;

    const noDientich = !dientich || isNaN(dientich) || +dientich <= 0;
    markField("f-dientich", noDientich);
    showErr("err-dientich", noDientich);
    if (noDientich) ok = false;

    state.ho_ten = ten;
    state.so_dien_thoai = sdt;
    state.email = email;
    state.ho_so_nguoi_dung = hoSoNguoiDung;
    state.email_ho_so = emailHoSo;
    state.dia_chi = diachi;
    state.dien_tich = dientich;
    state.loai_cong_trinh = document.getElementById("f-nguon")?.value || "";
    state.nguon_khach = state.loai_cong_trinh;
    state.chu_dau_tu = ten;
    return ok;
}

    function validateStep2() {
    const ok = state.selected_rooms.length > 0;
    showErr("err-rooms", !ok);
    return ok;
}

    function validateStep3() {
    state.selected_rooms.forEach(roomId => {
        const d = state.room_details[roomId];
        if (!d) return;
        const dtEl = document.getElementById("dientich-" + roomId);
        if (dtEl) d.dien_tich = dtEl.value.trim();
        const khacEl = document.getElementById("yeu-cau-khac-" + roomId);
        if (khacEl) d.yeu_cau_khac = khacEl.value.trim();
    });
    return true;
}

    function validateStep4() {
    state.ngan_sach = document.getElementById("f-tong-ngansach")?.value.trim() || "";
    state.uu_tien_phan_bo = state.uu_tien_phan_bo || "";
    state.muc_hoan_thien = state.muc_hoan_thien || "";
    state.thoi_gian_thi_cong = document.getElementById("f-thoi-gian-hoan-thanh")?.value.trim() || "";
    state.cac_moc_quan_trong = document.getElementById("f-cac-moc-quan-trong")?.value.trim() || "";
    state.khao_sat_phong_cach = document.getElementById("f-khaosat-phongcach")?.value.trim() || "";
    state.khao_sat_hinh_anh = document.getElementById("f-khaosat-hinhanh")?.value.trim() || "";
    state.khao_sat_khong_gian = document.getElementById("f-khaosat-khonggian")?.value.trim() || "";
    return true;
}

    function mergeSelectionWithOther(selectedValues, otherInputId) {
    const base = Array.isArray(selectedValues) ? [...selectedValues] : [];
    if (!otherInputId) {
    return { values: base, other: "" };
}
    const otherValue = document.getElementById(otherInputId)?.value.trim() || "";
    const normalized = base.map(v => {
    if (v !== "Khác") return v;
    return otherValue ? `Khác: ${otherValue}` : "Khác";
});
    return {
    values: normalized,
    other: base.includes("Khác") ? otherValue : ""
};
}

    function mapIdsToNames(ids, source) {
    const arr = Array.isArray(ids) ? ids : [];
    return arr.map(id => {
    const index = Array.isArray(source) ? source.findIndex(item => item.id === id) : -1;
    if (index !== -1) {
    const label = source[index]?.name || id;
    return `${index + 1}. ${label}`;
}
    return id;
});
}

    function mapMaterialIdsToNames(ids) {
    const arr = Array.isArray(ids) ? ids : [];
    return arr.map(id => formatMaterialNameWithIndex(id));
}

    function formatMaterialNameWithIndex(id) {
    for (let catIdx = 0; catIdx < MATERIALS.length; catIdx++) {
    const cat = MATERIALS[catIdx];
    if (cat.id === id) {
    return cat.name;
}
    if (Array.isArray(cat.types)) {
    const typeIdx = cat.types.findIndex(t => t.id === id);
    if (typeIdx !== -1) {
    return `${typeIdx + 1}. ${cat.types[typeIdx].name}`;
}
}
}
    return id;
}

    function generateSubmissionId() {
    if (window.crypto?.randomUUID) return window.crypto.randomUUID();
    return `felisede-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

    function detectSubmissionSource() {
    const params = new URLSearchParams(window.location.search || "");
    return state.source
    || params.get("utm_source")
    || params.get("source")
    || document.referrer
    || "direct";
}

    function buildColourComboPayload() {
    return (state.colour_combo || []).map(id => {
    const comboIndex = COLOUR_COMBO.findIndex(c => c.id === id);
    if (comboIndex === -1) return id;
    const combo = COLOUR_COMBO[comboIndex];
    const colorDetails = Array.isArray(combo.colors)
      ? combo.colors.map(c => `${c.name} (${c.hex})`).join(", ")
      : "";
    const prefix = `Bộ màu ${comboIndex + 1}. ${combo.name}`;
    return colorDetails ? `${prefix}: ${colorDetails}` : prefix;
});
}

    function buildMaterialsPayload() {
    const out = {};
    Object.entries(state.materials || {}).forEach(([catId, selectedIds]) => {
    if (!Array.isArray(selectedIds) || selectedIds.length === 0) return;
    const cat = MATERIALS.find(m => m.id === catId);
    const catName = cat ? cat.name : catId;
    const values = selectedIds.map(id => {
    if (cat && id === cat.id) return cat.name;
    if (cat && Array.isArray(cat.types)) {
    const typeIdx = cat.types.findIndex(t => t.id === id);
    if (typeIdx !== -1) {
    return `${typeIdx + 1}. ${cat.types[typeIdx].name}`;
}
}
    return formatMaterialNameWithIndex(id);
}).filter(Boolean);
    if (values.length) {
    out[catName] = values;
}
});
    return out;
}

    function bindKhaoSatImageUpload() {
    const input = document.getElementById("f-khaosat-hinhanh-files");
    if (!input) return;
    input.addEventListener("change", handleKhaoSatImageSelect);
}

    function handleKhaoSatImageSelect(e) {
    const input = e.target;
    const errEl = document.getElementById("khaosat-photo-error");
    if (errEl) { errEl.textContent = ""; errEl.classList.remove("visible"); }

    const files = Array.from(input.files || []).filter(f => f.type.startsWith("image/"));
    if (!files.length) return;

    const oversized = files.filter(f => f.size > MAX_KHAOSAT_IMAGE_MB * 1024 * 1024);
    if (oversized.length) {
    if (errEl) {
    errEl.textContent = `Có ${oversized.length} ảnh vượt quá ${MAX_KHAOSAT_IMAGE_MB}MB.`;
    errEl.classList.add("visible");
}
    input.value = "";
    return;
}

    const slots = MAX_KHAOSAT_IMAGES - state.khao_sat_hinh_anh_files.length;
    if (slots <= 0) {
    if (errEl) {
    errEl.textContent = `Bạn chỉ có thể tải tối đa ${MAX_KHAOSAT_IMAGES} ảnh tham khảo.`;
    errEl.classList.add("visible");
}
    input.value = "";
    return;
}

    const accepted = files.slice(0, slots).map(file => ({ file, name: file.name }));
    state.khao_sat_hinh_anh_files.push(...accepted);

    if (files.length > slots && errEl) {
    errEl.textContent = `Chỉ nhận ${MAX_KHAOSAT_IMAGES} ảnh, đã bỏ bớt ${files.length - slots} ảnh.`;
    errEl.classList.add("visible");
}

    renderKhaoSatImagePreview();
    input.value = "";
}

    function renderKhaoSatImagePreview() {
    const container = document.getElementById("khaosat-photo-preview");
    if (!container) return;
    container.innerHTML = "";

    state.khao_sat_hinh_anh_files.forEach((p, idx) => {
    const thumb = document.createElement("div");
    thumb.className = "photo-thumb";

    const img = document.createElement("img");
    const objUrl = URL.createObjectURL(p.file);
    img.src = objUrl;
    img.alt = p.name;
    img.onload = () => URL.revokeObjectURL(objUrl);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "photo-thumb-remove";
    btn.innerHTML = "&times;";
    btn.addEventListener("click", () => {
    state.khao_sat_hinh_anh_files.splice(idx, 1);
    renderKhaoSatImagePreview();
});

    thumb.appendChild(img);
    thumb.appendChild(btn);
    container.appendChild(thumb);
});
}

    /* ─────────────────────────────────────────────
    VALIDATE ALL & HANDLE SUBMIT
    ───────────────────────────────────────────── */
    function validateAll() {
    const results = [validateStep1(), validateStep2(), validateStep3(), validateStep4()];
    const allOk = results.every(Boolean);
    if (!allOk) {
    const firstErr = document.querySelector(".field-error.visible");
    if (firstErr) {
    const panel = firstErr.closest("details");
    if (panel && !panel.open) panel.open = true;
    setTimeout(() => firstErr.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
}
}
    return allOk;
}

    function handleSubmit() {
    const errEl = document.getElementById("global-error-msg");
    errEl.classList.remove("visible");
    if (validateAll()) { submitForm(); }
    else { errEl.textContent = "Vui lòng kiểm tra lại các thông tin còn thiếu bên trên."; errEl.classList.add("visible"); }
}

    /* ─────────────────────────────────────────────
    SUBMIT
    ───────────────────────────────────────────── */
    function setLoading(on) { document.getElementById("loading-overlay").classList.toggle("active", on); }
    function setLoadingMsg(html) { document.querySelector(".loading-text").innerHTML = html; }

    function compressImage(file, maxWidth, quality) {
    return new Promise((resolve, reject) => {
    if (!file || !file.type || !file.type.startsWith("image/")) {
    reject(new Error("Invalid file type"));
    return;
}
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
    let w = img.width, h = img.height;
    if (w > maxWidth) { h = Math.round(h * maxWidth / w); w = maxWidth; }
    const canvas = document.createElement("canvas");
    canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
    URL.revokeObjectURL(url);
    reject(new Error("Canvas context not available"));
    return;
}
    ctx.drawImage(img, 0, 0, w, h);
    URL.revokeObjectURL(url);
    try {
    const dataUrl = canvas.toDataURL("image/jpeg", quality);
    resolve(dataUrl.split(",")[1]);
} catch (e) {
    reject(new Error("Canvas toDataURL failed: " + e.message));
}
};
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("img load failed")); };
    img.src = url;
});
}

    async function processImages() {
    const all = [];
    const photos = state.khao_sat_hinh_anh_files || [];
    const total = photos.length;
    if (total === 0) return all;
    let done = 0;
    let failed = 0;
    for (const p of photos) {
    try {
    const data = await compressImage(p.file, 1200, 0.75);
    all.push({ room: "Khảo sát - Hình ảnh tham khảo", filename: p.name.replace(/\.[^.]+$/, ".jpg"), data, mimeType: "image/jpeg" });
} catch (err) {
    console.error("[PROCESS] Lỗi xử lý ảnh:", p.name, err);
    failed++;
}
    done++;
    setLoadingMsg(`Đang tải ảnh lên... <strong>${Math.round(done / total * 100)}%</strong>`);
}
    if (failed > 0) {
    console.warn("[PROCESS] Có", failed, "ảnh bị lỗi và bị bỏ qua");
}
    if (all.length === 0 && total > 0) {
    throw new Error("Không thể xử lý ảnh nào. Vui lòng thử lại với ảnh khác.");
}
    return all;
}

    async function submitForm() {
    document.getElementById("submit-error-box").classList.remove("visible");
    setLoading(true);
    setLoadingMsg("Đang xử lý...");

    console.log("[SUBMIT] Bắt đầu xử lý ảnh...");
    console.log("[SUBMIT] Ảnh đã chọn trong state:", (state.khao_sat_hinh_anh_files || []).length);
    let images = [];
    try {
    images = await processImages();
    console.log("[SUBMIT] Xử lý ảnh xong:", images.length, "ảnh");
    images.forEach((img, i) => console.log(`  Ảnh ${i+1}: ${img.filename} | base64 size: ${(img.data.length / 1024).toFixed(1)} KB`));
} catch (imgErr) {
    console.error("[SUBMIT] Lỗi xử lý ảnh:", imgErr);
    setLoading(false);
    document.getElementById("submit-error-msg").textContent = "Có lỗi xảy ra khi xử lý ảnh. Vui lòng thử lại hoặc tải ảnh nhỏ hơn.";
    document.getElementById("submit-error-box").classList.add("visible");
    return;
}
    setLoadingMsg("Đang gửi thông tin...");

    const roomsPayload = state.selected_rooms.map(roomId => {
    const d    = state.room_details[roomId] || {};
    const room = ROOMS.find(r => r.id === roomId);
    const yeuCauRaw = Array.isArray(d.yeu_cau) ? [...d.yeu_cau] : [];
    const yeuCau = yeuCauRaw.includes("Khác") && d.yeu_cau_khac
      ? yeuCauRaw.map(v => v === "Khác" ? `Khác: ${d.yeu_cau_khac}` : v)
      : yeuCauRaw;
    const mauSacIds = Array.isArray(d.mau_sac) ? d.mau_sac : [];
    const vatLieuIds = Array.isArray(d.vat_lieu) ? d.vat_lieu : [];
    const phongCachRaw = Array.isArray(d.phong_cach) ? d.phong_cach : (d.phong_cach ? [d.phong_cach] : []);
    const phongCachDisplay = phongCachRaw.join(", ");
    return {
    room: room ? room.name : roomId,
    style: phongCachDisplay,
    phong_cach: phongCachDisplay,
    dien_tich: d.dien_tich || "",
    yeu_cau: yeuCau,
    yeu_cau_khac: d.yeu_cau_khac || "",
    mau_sac: mauSacIds.map(id => { const s = MAU_SAC.find(m => m.id === id); return s ? s.name : id; }),
    vat_lieu: mapMaterialIdsToNames(vatLieuIds),
    uu_tien: d.uu_tien || "",
    ghi_chu: d.ghi_chu || "",
    notes: d.ghi_chu || ""
};
});

    const thoiQuenPayload = mergeSelectionWithOther(state.thoi_quen, "thoi-quen-khac");
    const soThichPayload = mergeSelectionWithOther(state.so_thich, "so-thich-khac");
    const kyVongPayload = mergeSelectionWithOther(state.ky_vong, "ky-vong-khac");
    const phongCachPayload = mapIdsToNames(state.phong_cach, PHONG_CACH);
    const colourComboPayload = buildColourComboPayload();
    const materialsPayload = buildMaterialsPayload();

    const submittedAt = new Date();
    const submittedAtIso = submittedAt.toISOString();
    const submissionId = generateSubmissionId();
    const userAgent = navigator.userAgent || "";
    const source = detectSubmissionSource();
    const selectedRoomsDisplay = roomsPayload.map(r => r.room).filter(Boolean).join(" | ");

    const khaoSatHinhAnhText = state.khao_sat_hinh_anh
      || (images.length ? (images.length + " ảnh đã đính kèm") : "");

    const payload = {
    submission_id: submissionId,
    submitted_at: submittedAtIso,
    created_at: submittedAtIso,
    timestamp: submittedAtIso,
    ho_ten: state.ho_ten, so_dien_thoai: state.so_dien_thoai,
    email: state.email, dia_chi: state.dia_chi, dien_tich: state.dien_tich,
    ho_so_nguoi_dung: state.ho_so_nguoi_dung,
    email_ho_so: state.email_ho_so,
    nguon_khach: state.nguon_khach,
    chu_dau_tu: state.chu_dau_tu,
    loai_cong_trinh: state.loai_cong_trinh,
    thoi_quen: thoiQuenPayload.values,
    thoi_quen_khac: thoiQuenPayload.other,
    so_thich: soThichPayload.values,
    so_thich_khac: soThichPayload.other,
    ly_do: state.ly_do || "",
    ky_vong: kyVongPayload.values,
    ky_vong_khac: kyVongPayload.other,
    uu_tien: state.uu_tien || "",
    phong_cach: phongCachPayload,
    design_styles: phongCachPayload,
    colour_combo: colourComboPayload,
    materials: materialsPayload,
    rooms: roomsPayload,
    room_details: roomsPayload,
    selected_rooms: selectedRoomsDisplay,
    ngan_sach: state.ngan_sach,
    thoi_gian_thi_cong: state.thoi_gian_thi_cong,
    yeu_cau_dac_biet: state.yeu_cau_dac_biet,
    uu_tien_phan_bo: state.uu_tien_phan_bo,
    muc_hoan_thien: state.muc_hoan_thien,
    cac_moc_quan_trong: state.cac_moc_quan_trong,
    khao_sat_phong_cach: state.khao_sat_phong_cach,
    khao_sat_hinh_anh: khaoSatHinhAnhText,
    khao_sat_khong_gian: state.khao_sat_khong_gian,
    uploaded_images_count: images.length,
    uploaded_images_urls: [],
    google_drive_folder_url: "",
    user_agent: userAgent,
    source,
    images
};

    const payloadDebug = {
    ...payload,
    images: (payload.images || []).map(img => ({
    room: img.room,
    filename: img.filename,
    mimeType: img.mimeType,
    base64SizeKB: img.data ? (img.data.length / 1024).toFixed(1) : "0"
}))
};
    console.log("[SUBMIT] Payload chi tiết:", payloadDebug);

    const bodyStr = JSON.stringify(payload);
    const payloadSizeKB = bodyStr.length / 1024;
    console.log("[SUBMIT] Payload tổng:", payloadSizeKB.toFixed(1), "KB |", images.length, "ảnh");
    console.log("[SUBMIT] Gửi đến:", APPS_SCRIPT_URL);

    if (payloadSizeKB > 45000) {
    console.error("[SUBMIT] Payload quá lớn:", payloadSizeKB.toFixed(1), "KB");
    setLoading(false);
    document.getElementById("submit-error-msg").textContent = "Dữ liệu quá lớn. Vui lòng giảm số lượng ảnh hoặc tải ảnh nhỏ hơn.";
    document.getElementById("submit-error-box").classList.add("visible");
    return;
}

    try {
    if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL === "PASTE_YOUR_APPS_SCRIPT_URL_HERE") {
    await new Promise(r => setTimeout(r, 800));
    showResult(); return;
}
    const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: bodyStr,
    mode: "no-cors"
});

    console.log("[SUBMIT] fetch hoàn thành. Response type:", res.type, "| status:", res.status);

    showResult();
} catch (err) {
    console.error("[SUBMIT] fetch lỗi:", err);
    setLoading(false);
    document.getElementById("submit-error-msg").textContent = err && err.message
      ? err.message
      : "Có lỗi xảy ra khi gửi thông tin. Vui lòng kiểm tra kết nối và thử lại.";
    document.getElementById("submit-error-box").classList.add("visible");
}
}

    function retrySubmit() { submitForm(); }

    /* ─────────────────────────────────────────────
    RESULT PAGE
    ───────────────────────────────────────────── */
    function showResult() {
    setLoading(false);
    document.querySelectorAll(".accordion-step").forEach(s => s.style.display = "none");
    const sw = document.querySelector(".submit-wrap"); if (sw) sw.style.display = "none";
    document.getElementById("submit-error-box").classList.remove("visible");

    const firstName = state.ho_ten.split(" ").pop();
    const rooms = state.selected_rooms.map(id => ROOMS.find(r => r.id === id)?.name).filter(Boolean);

    document.getElementById("res-title").textContent     = `Cảm ơn bạn, ${firstName}! 🎉`;
    document.getElementById("res-subtitle").textContent  = `Chúng tôi đã nhận yêu cầu tư vấn cho ${rooms.length} phòng.`;
    document.getElementById("res-style-badge").textContent = "✦ " + rooms.join(" · ");

    const hinhAnhThamKhaoVal = state.khao_sat_hinh_anh
      || (state.khao_sat_hinh_anh_files.length
        ? `${state.khao_sat_hinh_anh_files.length} ảnh đã tải lên`
        : "Không có");

    const rows = [
    ["Họ và tên",         state.ho_ten],
    ["Điện thoại",        state.so_dien_thoai],
    ["Email",             state.email || "Chưa cung cấp"],
    ["Địa chỉ thi công",  state.dia_chi],
    ["Diện tích",         state.dien_tich + " m²"],
    ["Phòng thiết kế",    rooms.join(", ")],
    ["Tổng ngân sách dự kiến", state.ngan_sach || "Không có"],
    ["Ưu tiên phân bổ",       state.uu_tien_phan_bo || "Không có"],
    ["Mức hoàn thiện",        state.muc_hoan_thien || "Không có"],
    ["Thời gian hoàn thành",  state.thoi_gian_thi_cong || "Không có"],
    ["Các mốc quan trọng",    state.cac_moc_quan_trong || "Không có"],
    ["Phong cách mong muốn", state.khao_sat_phong_cach || "Không có"],
    ["Hình ảnh tham khảo",   hinhAnhThamKhaoVal],
    ["Điều không thích",     state.khao_sat_khong_gian || "Không có"]
    ];
    document.getElementById("res-summary-rows").innerHTML = rows.map(([k, v]) =>
    `<div class="summary-row"><span class="summary-key">${k}</span><span class="summary-val">${v}</span></div>`
    ).join("");
    document.getElementById("result-page").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

    /* ─────────────────────────────────────────────
    SHARE / RESTART
    ───────────────────────────────────────────── */
    async function shareResult() {
    try {
    const text = `Mình vừa gửi yêu cầu tư vấn thiết kế nội thất cho ${state.selected_rooms.length} phòng. Bạn thử xem nhé!`;
    if (navigator.share) await navigator.share({ title: "Tư Vấn Thiết Kế Nội Thất FELISEDE", text, url: window.location.href });
    else { await navigator.clipboard.writeText(window.location.href); alert("Đã sao chép link!"); }
} catch (_) {}
}

    function restartForm() { window.location.reload(); }

    /* ─────────────────────────────────────────────
    INIT
    ───────────────────────────────────────────── */
    function init() {
    renderRooms();
    renderRadios("ro-uu-tien-phan-bo", UU_TIEN_PHAN_BO_OPTIONS, "uu_tien_phan_bo");
    renderRadios("ro-muc-hoan-thien", MUC_HOAN_THIEN_OPTIONS, "muc_hoan_thien");
    renderCheckboxGrid("thoi-quen-grid", ["Gọn gàng", "Làm việc tại nhà", "Hay tiếp khách", "Khác"], "thoi_quen", "thoi-quen-khac");
    renderCheckboxGrid("so-thich-grid", ["Nuôi thú cưng", "Đọc sách", "Trồng cây", "Khác"], "so_thich", "so-thich-khac");
    renderRadios("ly-do-radio", ["Ở", "Cho thuê", "Kinh doanh"], "ly_do");
    renderCheckboxGrid("ky-vong-grid", ["Đẹp", "Sang trọng - luxury", "Tiện nghi", "Tối ưu chi phí", "Thể hiện cá tính", "Khác"], "ky_vong", "ky-vong-khac");
    renderRadios("uu-tien-radio", ["Công năng", "Thẩm mỹ"], "uu_tien");
    renderPhongCach();
    renderColourCombo();
    renderMaterials();
    bindKhaoSatImageUpload();
    renderKhaoSatImagePreview();
}

    function renderColourCombo() {
    const container = document.getElementById("grid-colour");
    if (!container) return;
    container.innerHTML = "";
    COLOUR_COMBO.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "selection-card" + (state.colour_combo.includes(item.id) ? " selected" : "");
    card.innerHTML = `
          <div class="card-img-wrap">
            <img src="${item.img}" alt="${item.name}" loading="lazy" />
            <span class="card-index-badge">${idx + 1}</span>
            <div class="card-check"><svg viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1"/></svg></div>
          </div>
          <div class="combo-swatches">
            ${item.colors.map(c => `<div class="combo-swatch"><div class="combo-dot" style="background:${c.hex};"></div><span class="combo-swatch-name">${c.name}</span></div>`).join("")}
          </div>`;
    card.addEventListener("click", () => {
    const idx = state.colour_combo.indexOf(item.id);
    if (idx === -1) { state.colour_combo.push(item.id); card.classList.add("selected"); }
    else            { state.colour_combo.splice(idx, 1); card.classList.remove("selected"); }
});
    container.appendChild(card);
});
}

    function renderMaterials() {
    const section = document.getElementById("material-section");
    if (!section) return;
    section.innerHTML = "";

    const catGrid = document.createElement("div");
    catGrid.className = "material-cat-grid";

    const panels = [];
    MATERIALS.forEach(mat => {
    if (!state.materials[mat.id]) state.materials[mat.id] = [];

    const card = document.createElement("div");
    card.className = "material-cat-card";
    card.innerHTML = `<img class="cat-img" src="${mat.img}" alt="${mat.name}" loading="lazy"><div class="cat-name">${mat.name}</div>`;
    catGrid.appendChild(card);

    const panel = document.createElement("div");
    panel.className = "material-type-panel";
    panel.innerHTML = `<div class="material-type-title">${mat.name}</div><div class="material-type-grid" id="mat-types-${mat.id}"></div>`;
    panels.push({ card, panel, mat });
});

    section.appendChild(catGrid);
    panels.forEach(({ card, panel, mat }) => {
    if (mat.types && mat.types.length > 0) {
    section.appendChild(panel);
    card.addEventListener("click", () => {
    const isOpen = panel.classList.contains("visible");
    panels.forEach(p => { p.card.classList.remove("active"); p.panel.classList.remove("visible"); });
    if (!isOpen) { card.classList.add("active"); panel.classList.add("visible"); }
    renderMatTypes(mat.id);
});
    } else {
    card.addEventListener("click", () => {
    const wasActive = card.classList.contains("active");
    panels.forEach(p => { p.card.classList.remove("active"); p.panel.classList.remove("visible"); });
    card.classList.toggle("active", !wasActive);
    const sel = !wasActive;
    if (sel) { if (!state.materials[mat.id].includes(mat.id)) state.materials[mat.id].push(mat.id); }
    else { state.materials[mat.id] = state.materials[mat.id].filter(x => x !== mat.id); }
});
    }
});
}

    function renderMatTypes(catId) {
    const mat = MATERIALS.find(m => m.id === catId);
    const container = document.getElementById("mat-types-" + catId);
    if (!mat || !container) return;
    container.innerHTML = "";
    mat.types.forEach((t, idx) => {
    const item = document.createElement("div");
    item.className = "material-type-item" + (state.materials[catId].includes(t.id) ? " selected" : "");
    item.innerHTML = `
        <div class="card-img-wrap material-type-thumb">
          <img class="material-type-swatch" src="${t.img}" alt="${t.name}" loading="lazy">
          <span class="card-index-badge">${idx + 1}</span>
        </div>
        <span class="material-type-name">${t.name}</span>`;
    item.addEventListener("click", () => {
    const idx = state.materials[catId].indexOf(t.id);
    if (idx === -1) { state.materials[catId].push(t.id); item.classList.add("selected"); }
    else            { state.materials[catId].splice(idx, 1); item.classList.remove("selected"); }
});
    container.appendChild(item);
});
}

    function renderPhongCach() {
    const container = document.getElementById("grid-phongcach");
    if (!container) return;
    container.innerHTML = "";
    PHONG_CACH.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "selection-card" + (state.phong_cach.includes(item.id) ? " selected" : "");
    card.innerHTML = `
          <div class="card-img-wrap">
            <img src="${item.img}" alt="${item.name}" loading="lazy" />
            <span class="card-index-badge">${idx + 1}</span>
            <div class="card-check"><svg viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1"/></svg></div>
          </div>
          <div class="card-body">
            <div class="card-title">${item.name}</div>
          </div>`;
    card.addEventListener("click", () => {
    const idx = state.phong_cach.indexOf(item.id);
    if (idx === -1) { state.phong_cach.push(item.id); card.classList.add("selected"); }
    else            { state.phong_cach.splice(idx, 1); card.classList.remove("selected"); }
});
    container.appendChild(card);
});
}

    function renderCheckboxGrid(containerId, options, stateKey, otherInputId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    options.forEach(opt => {
    const item = document.createElement("div");
    item.className = "checkbox-item" + (state[stateKey].includes(opt) ? " checked" : "");
    item.innerHTML = `<div class="checkbox-box"><svg viewBox="0 0 10 8"><polyline points="1,4 3.5,7 9,1"/></svg></div><span class="checkbox-label">${opt}</span>`;
    item.addEventListener("click", () => {
    const idx = state[stateKey].indexOf(opt);
    if (idx === -1) { state[stateKey].push(opt); item.classList.add("checked"); }
    else            { state[stateKey].splice(idx, 1); item.classList.remove("checked"); }
    if (opt === "Khác" && otherInputId) {
    const inp = document.getElementById(otherInputId);
    if (inp) { inp.style.display = item.classList.contains("checked") ? "block" : "none"; if (!item.classList.contains("checked")) inp.value = ""; }
}
});
    container.appendChild(item);
});
}

    document.addEventListener("DOMContentLoaded", init);
