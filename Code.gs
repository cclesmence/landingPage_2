// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURATION
// ─────────────────────────────────────────────────────────────────────────────
const OWNER_EMAIL     = "nguyenthithuhuyen29403@gmail.com";      // email nhận thông báo
const SHEET_NAME      = "Submissions";                // tên sheet trong Spreadsheet
const DRIVE_FOLDER_ID = "1Y-S9flb5NYp-FMDIERYxfkX3BJJphhbb";  // ID thư mục Google Drive
const SPREADSHEET_ID  = "1fGvkLx1PEzvcSFpZj_X8uvD4Y4Hv0980Kdd6ePxNIBo";  // ← Dán ID Google Sheet vào đây nếu script standalone (lấy từ URL sheet)

const TIMEZONE = "Asia/Ho_Chi_Minh";

const SHEET_HEADERS = [
  "Thời gian",
  "Hồ sơ người sử dụng",
  "Mục tiêu và mong muốn",
  "Phòng thiết kế",
  "Phong cách",
  "Colour combo",
  "Vật liệu",
  "Khảo sát thêm",
  "Link ảnh phong cách tham khảo",
  "Tổng quan dự án",
];

const WRAP_COLUMNS = [
  "Hồ sơ người sử dụng",
  "Mục tiêu và mong muốn",
  "Phòng thiết kế",
  "Phong cách",
  "Colour combo",
  "Vật liệu",
  "Khảo sát thêm",
  "Link ảnh phong cách tham khảo",
  "Tổng quan dự án",
];

const EXTRA_DISPLAY_HEADERS = [];

const PAYLOAD_TO_COLUMNS = {
  submission_id: ["submission_id"],
  submitted_at: ["submitted_at"],
  created_at: ["created_at"],
  timestamp: ["submitted_at"],
  ho_ten: ["ho_ten"],
  so_dien_thoai: ["phone"],
  phone: ["phone"],
  email: ["email"],
  nguon_khach: ["nguon_khach"],
  ho_so_nguoi_dung: ["ho_so_nguoi_dung"],
  email_ho_so: ["email_ho_so"],
  thoi_quen: ["thoi_quen_sinh_hoat"],
  thoi_quen_khac: ["thoi_quen_khac"],
  so_thich: ["so_thich"],
  so_thich_khac: ["so_thich_khac"],
  ly_do: ["ly_do_xay_dung"],
  ky_vong: ["ky_vong_chinh"],
  ky_vong_khac: ["ky_vong_khac"],
  uu_tien: ["uu_tien_hang_dau"],
  phong_cach: ["design_styles"],
  design_styles: ["design_styles"],
  colour_combo: ["colour_combo"],
  materials: ["materials"],
  rooms: ["selected_rooms", "room_details"],
  room_details: ["room_details"],
  selected_rooms: ["selected_rooms"],
  ngan_sach: ["tong_ngan_sach"],
  tong_ngan_sach: ["tong_ngan_sach"],
  uu_tien_phan_bo: ["uu_tien_phan_bo"],
  muc_hoan_thien: ["muc_hoan_thien"],
  thoi_gian_thi_cong: ["thoi_gian_hoan_thanh"],
  thoi_gian_hoan_thanh: ["thoi_gian_hoan_thanh"],
  cac_moc_quan_trong: ["cac_moc_quan_trong"],
  yeu_cau_dac_biet: ["yeu_cau_dac_biet"],
  khao_sat_phong_cach: ["phong_cach_mong_muon"],
  phong_cach_mong_muon: ["phong_cach_mong_muon"],
  khao_sat_hinh_anh: ["hinh_anh_tham_khao_text"],
  hinh_anh_tham_khao_text: ["hinh_anh_tham_khao_text"],
  khao_sat_khong_gian: ["khong_gian_khong_thich"],
  khong_gian_khong_thich: ["khong_gian_khong_thich"],
  images: ["uploaded_images_count", "uploaded_images_urls", "google_drive_folder_url"],
  uploaded_images_count: ["uploaded_images_count"],
  uploaded_images_urls: ["uploaded_images_urls"],
  google_drive_folder_url: ["google_drive_folder_url"],
  chu_dau_tu: ["chu_dau_tu"],
  dia_chi: ["dia_chi_xay_dung"],
  dia_chi_xay_dung: ["dia_chi_xay_dung"],
  dien_tich: ["dien_tich"],
  loai_cong_trinh: ["loai_cong_trinh"],
  ten_du_an: ["ten_du_an"],
  dien_tich_dat: ["dien_tich_dat"],
  thoi_gian_thi_cong_text: ["thoi_gian_hoan_thanh"],
  user_agent: ["user_agent"],
  source: ["source"]
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN HANDLER
// ─────────────────────────────────────────────────────────────────────────────
function doPost(e) {
  try {
    if (!e || !e.postData) {
      console.error("[doPost] e hoặc e.postData là undefined – có vẻ đây là chạy thủ công từ editor, không phải từ web request.");
      return ContentService
        .createTextOutput(JSON.stringify({ status: "error", message: "No event data (run from editor?)" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    const raw  = e.postData.contents || "{}";
    console.log("[doPost] postData tồn tại:", !!e.postData, "| raw length:", raw.length);

    let data;
    try {
      data = JSON.parse(raw);
      console.log("[doPost] JSON parse OK | ho_ten:", data.ho_ten, "| số ảnh:", (data.images || []).length);
    } catch (parseErr) {
      console.error("[doPost] JSON parse THẤT BẠI:", parseErr.message, "| raw 200 ký tự đầu:", raw.substring(0, 200));
      throw parseErr;
    }

    const requestedImages = Array.isArray(data.images) ? data.images.length : 0;
    console.log("[doPost] requestedImages:", requestedImages, "| khao_sat_hinh_anh:", data.khao_sat_hinh_anh || "");

    data.submission_id = data.submission_id || Utilities.getUuid();
    data.submitted_at = data.submitted_at || data.timestamp || new Date().toISOString();
    data.created_at = data.created_at || data.submitted_at;

    let driveResult = { links: [], folderUrl: "" };
    try {
      driveResult = saveImagesToDrive(data);
      console.log("[doPost] saveImagesToDrive OK | links:", driveResult.links.length, "| requested:", requestedImages);
    } catch (driveErr) {
      console.error("[doPost] Drive error (bỏ qua ảnh, vẫn lưu sheet):", driveErr.message);
    }

    const imageLinks = driveResult.links || [];
    data.google_drive_folder_url = data.google_drive_folder_url || driveResult.folderUrl || "";
    data.uploaded_images_count = typeof data.uploaded_images_count === "number" ? data.uploaded_images_count : imageLinks.length;
    data.uploaded_images_urls = Array.isArray(data.uploaded_images_urls) && data.uploaded_images_urls.length
      ? data.uploaded_images_urls
      : imageLinks.map(function(link) { return link.url; });

    saveToSheet(data, imageLinks);
    console.log("[doPost] saveToSheet OK");

    sendEmailNotification(data, imageLinks);
    console.log("[doPost] sendEmailNotification OK");

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    console.error("[doPost] LỖI CHÍNH:", err.message);
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "Apps Script is running." }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doTest() {
  const onePxPngBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO7+8J8AAAAASUVORK5CYII=";

  const sampleRooms = [{
    room: "Phòng khách",
    style: "",
    phong_cach: "",
    dien_tich: "111",
    yeu_cau: ["Phòng kín"],
    yeu_cau_khac: "",
    vat_lieu: ["Gỗ tự nhiên", "Đá"],
    mau_sac: ["Bộ màu 6. Xám thẫm & Đen kim cương"],
    uu_tien: "Tối ưu công năng",
    ghi_chu: "Muốn nhiều ánh sáng tự nhiên"
  }];

  const data = {
    submission_id: "24655334-47f6-4b55-9c2e-b1675bc45199",
    submitted_at: "2026-05-30T10:45:45.098Z",
    created_at: "2026-05-30T10:45:45.098Z",
    timestamp: "2026-05-30T10:45:45.098Z",
    ho_so_nguoi_dung: "111",
    email_ho_so: "hangusi03@gmail.com",
    ho_ten: "111",
    so_dien_thoai: "0836569920",
    email: "hangngusi03@gmail.com",
    dia_chi: "111",
    dien_tich: "111",
    nguon_khach: "Chung cư",
    loai_cong_trinh: "Chung cư",
    chu_dau_tu: "111",
    ten_du_an: "Dự án test",
    dien_tich_dat: "0",
    ngan_sach: "111",
    uu_tien_phan_bo: "Phần thô",
    muc_hoan_thien: "Basic",
    thoi_gian_thi_cong: "11",
    cac_moc_quan_trong: "111",
    yeu_cau_dac_biet: "",
    ly_do: "Ở",
    ky_vong: ["Đẹp"],
    uu_tien: "Công năng",
    thoi_quen: ["Gọn gàng"],
    thoi_quen_khac: "",
    so_thich: ["Nuôi thú cưng"],
    so_thich_khac: "",
    design_styles: ["1. Cổ điển (Classical)"],
    colour_combo: ["Bộ màu 6. Xám thẫm & Đen kim cương: Xám thẫm (#4B433F), Đen kim cương (#010500)"],
    materials: { "Gỗ tự nhiên": ["1. Walnut", "2. Cedar"] },
    rooms: sampleRooms,
    room_details: sampleRooms,
    selected_rooms: "Phòng khách",
    khao_sat_phong_cach: "111",
    khao_sat_hinh_anh: "1 ảnh đã đính kèm",
    khao_sat_khong_gian: "111",
    thoi_gian_thi_cong_text: "11",
    ky_vong_khac: "",
    images: [
      {
        room: "Khảo sát - Hình ảnh tham khảo",
        filename: "Screenshot-2026-05-29.png",
        mimeType: "image/png",
        data: onePxPngBase64
      }
    ],
    source: "http://127.0.0.1:5500/",
    user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Chrome/148.0.0.0 Safari/537.36"
  };

  const driveResult = saveImagesToDrive(data);
  const links = driveResult.links || [];
  data.google_drive_folder_url = driveResult.folderUrl || "";
  data.uploaded_images_count = links.length;
  data.uploaded_images_urls = links.map(function(item) { return item.url; });

  Logger.log("[doTest] uploaded=%s | folder=%s", links.length, driveResult.folderUrl);

  saveToSheet(data, links);
  return { status: "ok", sheetRowInserted: true, folderUrl: driveResult.folderUrl, links: links };
}

// ─────────────────────────────────────────────────────────────────────────────
// LƯU ẢNH VÀO GOOGLE DRIVE
// ─────────────────────────────────────────────────────────────────────────────
function saveImagesToDrive(data) {
  const images = Array.isArray(data.images) ? data.images : [];
  if (!images || images.length === 0) {
    return { folderUrl: "", links: [] };
  }

  const ts        = Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "yyyyMMdd_HHmmss");
  const folderName = "FELISEDE - " + (data.ho_ten || "Khách") + " - " + ts;

  let parentFolder;
  if (DRIVE_FOLDER_ID && DRIVE_FOLDER_ID !== "PASTE_YOUR_FOLDER_ID_HERE") {
    try {
      parentFolder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
      parentFolder.getName();
    } catch (err) {
      throw new Error("Khong truy cap duoc DRIVE_FOLDER_ID: " + DRIVE_FOLDER_ID + " | " + err.message);
    }
  } else {
    parentFolder = DriveApp.getRootFolder();
  }

  const folder = parentFolder.createFolder(folderName);
  folder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  const folderUrl = folder.getUrl();

  const links = [];
  let failedCount = 0;
  images.forEach(function(img) {
    try {
      console.log("[saveImages] Processing image:", img.filename, "| room:", img.room, "| data length:", img.data ? img.data.length : 0);

      if (!img.data) {
        console.error("[saveImages] Missing image data for:", img.filename);
        return;
      }

      const decoded  = Utilities.base64Decode(img.data);
      console.log("[saveImages] Base64 decode OK, decoded size:", decoded.length);

      const mime    = img.mimeType || (img.filename && img.filename.toLowerCase().endsWith(".png") ? "image/png" : img.filename && img.filename.toLowerCase().endsWith(".webp") ? "image/webp" : "image/jpeg");
      const blob    = Utilities.newBlob(decoded, mime, img.filename || "image.jpg");
      const file    = folder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

      const fileUrl = "https://drive.google.com/file/d/" + file.getId() + "/view";
      console.log("[saveImages] File created successfully:", img.filename, "| URL:", fileUrl);

      links.push({
        room:     img.room || "",
        filename: img.filename || "image.jpg",
        url:      fileUrl
      });
    } catch (err) {
      failedCount++;
      console.error("[saveImages] Error processing image:", img.filename, "| Error:", err.message, "| Stack:", err.stack);
    }
  });

  if (links.length === 0 && images.length > 0) {
    throw new Error("Khong tao duoc file nao tren Drive. failedCount=" + failedCount + "/" + images.length);
  }

  return { folderUrl: folderUrl, links: links };
}

// ─────────────────────────────────────────────────────────────────────────────
// GHI DỮ LIỆU VÀO GOOGLE SHEET
// ─────────────────────────────────────────────────────────────────────────────
function saveToSheet(data, imageLinks) {
  const ss = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error("Không tìm thấy Spreadsheet. Hãy điền SPREADSHEET_ID trong CONFIGURATION hoặc bind script vào Google Sheet.");
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  const headers = ensureSheetHeaders(sheet);
  applyColumnWidths(sheet, headers);
  warnMissingMappings(data);

  const rooms = Array.isArray(data.rooms)
    ? data.rooms
    : (Array.isArray(data.room_details) ? data.room_details : []);
  const selectedRooms = data.selected_rooms
    ? (Array.isArray(data.selected_rooms) ? data.selected_rooms.join(" | ") : String(data.selected_rooms))
    : rooms.map(function(r) { return r.room; }).filter(Boolean).join(" | ");
  const designStylesStr = listToString(data.design_styles || data.phong_cach, " | ");
  const colourComboParts = Array.isArray(data.colour_combo) ? data.colour_combo
    : (data.colour_combo ? [String(data.colour_combo)] : []);
  const colourComboStr = colourComboParts.length
    ? colourComboParts.map(function(c) { return "- " + c; }).join("\n")
    : "";

  const submittedAtIso = data.submitted_at || data.timestamp || new Date().toISOString();
  const submittedAtDisplay = Utilities.formatDate(new Date(submittedAtIso), TIMEZONE, "dd/MM/yyyy HH:mm:ss");
  const roomDetailsDisplay = formatRoomDetailsReadable(rooms);
  const linkAnhThamKhao = (imageLinks || []).map(function(l) { return l.url; }).join("\n");
  data.submission_id = data.submission_id || Utilities.getUuid();

  const phoneRaw = data.so_dien_thoai || data.phone || "";

  // ── Hồ sơ người sử dụng (merged) ──
  const hoSoMerged = joinNonEmptyParts([
    data.ho_so_nguoi_dung ? "1. Độ tuổi, nghề nghiệp: " + data.ho_so_nguoi_dung : "",
    data.email_ho_so      ? "2. Email: "                    + data.email_ho_so      : "",
    formatListField("3. Thói quen sinh hoạt: ", data.thoi_quen),
    formatListField("4. Sở thích: ",            data.so_thich),
  ]);

  // ── Mục tiêu và mong muốn (merged) ──
  const mucTieuMerged = joinNonEmptyParts([
    data.ly_do   ? "1. Mục đích xây dựng để: " + data.ly_do  : "",
    formatListField("2. Mong muốn: ", data.ky_vong),
    data.uu_tien ? "3. Ưu tiên hàng đầu: "         + data.uu_tien : "",
  ]);

  // ── Khảo sát thêm (merged) ──
  const phongCachSurveyNote = joinNonEmptyParts([
    designStylesStr         ? "Mẫu nhà: "  + designStylesStr         : "",
    data.khao_sat_phong_cach ? "Ghi chú: " + data.khao_sat_phong_cach : "",
  ]);
  const khaoSatThemMerged = joinNonEmptyParts([
    (data.ngan_sach || data.tong_ngan_sach) ? "1. Tổng ngân sách dự kiến: " + (data.ngan_sach || data.tong_ngan_sach) : "",
    data.uu_tien_phan_bo  ? "2. Ưu tiên: "                       + data.uu_tien_phan_bo  : "",
    data.muc_hoan_thien   ? "3. Mong muốn hoàn thiện ở mức: "    + data.muc_hoan_thien   : "",
    (data.thoi_gian_thi_cong || data.thoi_gian_hoan_thanh)
                          ? "4. Thời gian muốn hoàn thành: "     + (data.thoi_gian_thi_cong || data.thoi_gian_hoan_thanh) : "",
    data.cac_moc_quan_trong ? "5. Mốc thời gian quan trọng: "    + data.cac_moc_quan_trong : "",
    phongCachSurveyNote   ? "6. Phong cách mong muốn:\n"         + phongCachSurveyNote    : "",
    data.khao_sat_khong_gian ? "7. Ghét điều gì trong không gian: " + data.khao_sat_khong_gian : "",
    data.yeu_cau_dac_biet ? "8. Yêu cầu đặc biệt: "             + data.yeu_cau_dac_biet : "",
  ]);

  // ── Tổng quan dự án (merged) ──
  const tongQuanMerged = joinNonEmptyParts([
    (data.chu_dau_tu || data.ho_ten) ? "1. Chủ đầu tư: "         + (data.chu_dau_tu || data.ho_ten)             : "",
    phoneRaw         ? "2. Số điện thoại: "         + phoneRaw                                     : "",
    data.email       ? "3. Email: "                 + data.email                                   : "",
    (data.dia_chi || data.dia_chi_xay_dung) ? "4. Địa điểm xây dựng: " + (data.dia_chi || data.dia_chi_xay_dung) : "",
    data.dien_tich   ? "5. Diện tích: "             + data.dien_tich + " m²"                       : "",
    data.loai_cong_trinh ? "6. Loại công trình: "   + data.loai_cong_trinh                         : "",
  ]);

  const headerValues = {};
  assignHeaderValue(headerValues, ["Thời gian"], submittedAtDisplay);
  assignHeaderValue(headerValues, ["Hồ sơ người sử dụng", "ho_so_nguoi_dung"], hoSoMerged);
  assignHeaderValue(headerValues, ["Mục tiêu và mong muốn"], mucTieuMerged);
  assignHeaderValue(headerValues, ["Phòng thiết kế", "selected_rooms"], roomDetailsDisplay);
  assignHeaderValue(headerValues, ["Phong cách", "design_styles", "phong_cach"], designStylesStr);
  assignHeaderValue(headerValues, ["Colour combo", "colour_combo"], colourComboStr);
  assignHeaderValue(headerValues, ["Vật liệu", "materials"], formatMaterials(data.materials));
  assignHeaderValue(headerValues, ["Khảo sát thêm"], khaoSatThemMerged);
  assignHeaderValue(headerValues, ["Link ảnh phong cách tham khảo", "Link ảnh tham khảo"], linkAnhThamKhao);
  assignHeaderValue(headerValues, ["Tổng quan dự án"], tongQuanMerged);

  const row = headers.map(function(headerName) {
    return resolveHeaderValue(headerName, headerValues, data);
  });

  sheet.appendRow(row);
  const lastRow = sheet.getLastRow();
  if (lastRow % 2 === 0) {
    sheet.getRange(lastRow, 1, 1, row.length).setBackground("#fdf8f0");
  }
  const wrapSet = new Set(WRAP_COLUMNS.map(normalizeHeaderKey));
  headers.forEach(function(headerName, idx) {
    if (wrapSet.has(normalizeHeaderKey(headerName))) {
      sheet.getRange(lastRow, idx + 1).setWrap(true);
    }
  });

  // Make link column URLs clickable hyperlinks
  const linkNorm = normalizeHeaderKey("Link ảnh phong cách tham khảo");
  const linkColIdx = headers.map(normalizeHeaderKey).indexOf(linkNorm);
  if (linkColIdx >= 0 && linkAnhThamKhao) {
    const urls = linkAnhThamKhao.split("\n").filter(Boolean);
    if (urls.length > 0) {
      const fullText = urls.join("\n");
      const rtb = SpreadsheetApp.newRichTextValue().setText(fullText);
      let pos = 0;
      urls.forEach(function(url) {
        rtb.setLinkUrl(pos, pos + url.length, url);
        pos += url.length + 1;
      });
      sheet.getRange(lastRow, linkColIdx + 1).setRichTextValue(rtb.build());
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// GỬI EMAIL THÔNG BÁO
// ─────────────────────────────────────────────────────────────────────────────
function sendEmailNotification(data, imageLinks) {
  if (!OWNER_EMAIL || OWNER_EMAIL === "PASTE_YOUR_EMAIL_HERE") return;

  const ts = data.timestamp
    ? Utilities.formatDate(new Date(data.timestamp), TIMEZONE, "dd/MM/yyyy HH:mm:ss")
    : Utilities.formatDate(new Date(), TIMEZONE, "dd/MM/yyyy HH:mm:ss");

  const rooms      = Array.isArray(data.rooms) ? data.rooms : [];
  const firstName  = data.ho_ten ? data.ho_ten.split(" ").pop() : "Khách";
  const subject    = "[FELISEDE] Tư vấn mới từ " + (data.ho_ten || "Khách hàng");

  const roomRowsHtml = rooms.map(function(r) {
    const imgs = (imageLinks || []).filter(function(l) { return l.room === r.room; });
    const yeuCau = Array.isArray(r.yeu_cau) ? r.yeu_cau.join(", ") : (r.yeu_cau || "");
    const phongCach = Array.isArray(r.phong_cach) ? r.phong_cach.join(", ") : (r.phong_cach || "—");
    const phongCachGlobal = Array.isArray(data.phong_cach) ? data.phong_cach.join(", ") : (data.phong_cach || "");
    const colourComboGlobal = Array.isArray(data.colour_combo) ? data.colour_combo.join(", ") : (data.colour_combo || "");
    const vatLieu   = Array.isArray(r.vat_lieu) ? r.vat_lieu.join(", ") : (r.vat_lieu || "");
    const materialsGlobalInline = formatMaterials(data.materials).replace(/\n/g, " | ");
    const phongCachDisplay = (phongCach && phongCach !== "—") ? phongCach : phongCachGlobal || "—";
    const mauDisplay = (r.mau_sac && r.mau_sac.length) ? r.mau_sac.join(", ") : colourComboGlobal;
    const vatLieuDisplay = vatLieu || materialsGlobalInline;
    const imgHtml = imgs.length
      ? "<br/><small style='color:#8B6914;'>🖼 Ảnh: " + imgs.map(function(l) {
          return '<a href="' + l.url + '" style="color:#8B6914;">' + l.filename + "</a>";
        }).join(" · ") + "</small>"
      : "";
    return `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #f5f0e8;">
          <strong style="font-size:14px;color:#1A1A1A;">${r.room}</strong>
          ${imgHtml}
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:6px;">
            ${r.dien_tich ? infoRow("Diện tích", r.dien_tich + " m²") : ""}
            ${yeuCau ? infoRow("Yêu cầu", yeuCau) : ""}
            ${infoRow("Phong cách", phongCachDisplay)}
            ${mauDisplay ? infoRow("Màu sắc", mauDisplay) : ""}
            ${vatLieuDisplay ? infoRow("Vật liệu", vatLieuDisplay) : ""}
            ${r.uu_tien ? infoRow("Ưu tiên",   r.uu_tien) : ""}
            ${r.ghi_chu ? infoRow("Ghi chú",   r.ghi_chu) : ""}
          </table>
        </td>
      </tr>`;
  }).join("");

  const htmlBody = `<!DOCTYPE html>
<html lang="vi">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;padding:32px 16px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

      <tr><td style="background:linear-gradient(135deg,#8B6914,#a8821e);padding:28px 32px 22px;text-align:center;">
        <p style="margin:0 0 4px;color:rgba(255,255,255,0.75);font-size:11px;letter-spacing:2px;text-transform:uppercase;">Tư Vấn Thiết Kế Nội Thất FELISEDE</p>
        <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">Yêu Cầu Tư Vấn Mới</h1>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">${ts}</p>
      </td></tr>

      <tr><td style="background:#fff8ec;border-bottom:1px solid #f0e0b0;padding:12px 32px;text-align:center;">
        <p style="margin:0;font-size:14px;color:#7a5200;">📬 Khách hàng mới cần tư vấn. Hãy liên hệ trong <strong>24 giờ</strong>!</p>
      </td></tr>

      <tr><td style="padding:28px 32px;">

        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          <tr><td style="padding-bottom:12px;">
            <h2 style="margin:0;font-size:14px;font-weight:700;color:#8B6914;text-transform:uppercase;letter-spacing:0.8px;border-bottom:2px solid #f5f0e8;padding-bottom:8px;">👤 Thông tin khách hàng</h2>
          </td></tr>
          ${infoRow("Họ và tên", data.ho_ten || "—")}
          ${infoRow("Hồ sơ người sử dụng", data.ho_so_nguoi_dung || "—")}
          ${infoRow("Số điện thoại", '<a href="tel:' + (data.so_dien_thoai||"") + '" style="color:#8B6914;font-weight:600;text-decoration:none;">' + (data.so_dien_thoai||"—") + "</a>")}
          ${infoRow("Email", data.email ? '<a href="mailto:' + data.email + '" style="color:#8B6914;text-decoration:none;">' + data.email + "</a>" : "Chưa cung cấp")}
          ${data.email_ho_so ? infoRow("Email hồ sơ", data.email_ho_so) : ""}
          ${infoRow("Địa chỉ thi công", data.dia_chi || "—")}
          ${infoRow("Diện tích", data.dien_tich ? data.dien_tich + " m²" : "—")}
          ${infoRow("Nguồn khách", data.nguon_khach || "—")}
          ${data.loai_cong_trinh ? infoRow("Loại công trình", data.loai_cong_trinh) : ""}
          ${data.chu_dau_tu ? infoRow("Chủ đầu tư", data.chu_dau_tu) : ""}
        </table>

        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          <tr><td style="padding-bottom:12px;">
            <h2 style="margin:0;font-size:14px;font-weight:700;color:#8B6914;text-transform:uppercase;letter-spacing:0.8px;border-bottom:2px solid #f5f0e8;padding-bottom:8px;">🏠 Chi tiết phòng (${rooms.length} phòng)</h2>
          </td></tr>
          ${roomRowsHtml}
        </table>

        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          <tr><td style="padding-bottom:12px;">
            <h2 style="margin:0;font-size:14px;font-weight:700;color:#8B6914;text-transform:uppercase;letter-spacing:0.8px;border-bottom:2px solid #f5f0e8;padding-bottom:8px;">💰 Ngân sách &amp; Thời gian</h2>
          </td></tr>
          ${infoRow("Ngân sách dự kiến", '<strong style="color:#1a6b3c;">' + (data.ngan_sach || "—") + "</strong>")}
          ${infoRow("Ưu tiên phân bổ", data.uu_tien_phan_bo || "—")}
          ${infoRow("Mức hoàn thiện", data.muc_hoan_thien || "—")}
          ${infoRow("Thời gian thi công", data.thoi_gian_thi_cong || "—")}
          ${infoRow("Các mốc quan trọng", data.cac_moc_quan_trong || "—")}
        </table>

        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          <tr><td style="padding-bottom:10px;">
            <h2 style="margin:0;font-size:14px;font-weight:700;color:#8B6914;text-transform:uppercase;letter-spacing:0.8px;border-bottom:2px solid #f5f0e8;padding-bottom:8px;">📝 Khảo sát thêm</h2>
          </td></tr>
          ${Array.isArray(data.thoi_quen) && data.thoi_quen.length ? infoRow("Thói quen sinh hoạt", data.thoi_quen.join(", ")) : ""}
          ${Array.isArray(data.so_thich) && data.so_thich.length ? infoRow("Sở thích", data.so_thich.join(", ")) : ""}
          ${data.ly_do ? infoRow("Lý do xây dựng", data.ly_do) : ""}
          ${Array.isArray(data.ky_vong) && data.ky_vong.length ? infoRow("Kỳ vọng chính", data.ky_vong.join(", ")) : ""}
          ${data.uu_tien ? infoRow("Ưu tiên hàng đầu", data.uu_tien) : ""}
          ${Array.isArray(data.phong_cach) && data.phong_cach.length ? infoRow("Phong cách yêu thích", data.phong_cach.join(", ")) : ""}
          ${Array.isArray(data.colour_combo) && data.colour_combo.length ? infoRow("Colour combo", data.colour_combo.join(", ")) : ""}
          ${data.materials ? infoRow("Materials", formatMaterials(data.materials)) : ""}
          ${infoRow("Phong cách mong muốn", data.khao_sat_phong_cach || "—")}
          ${infoRow("Hình ảnh tham khảo", data.khao_sat_hinh_anh || "—")}
          ${infoRow("Điều không thích", data.khao_sat_khong_gian || "—")}
        </table>

        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td align="center" style="padding-top:8px;">
            <a href="tel:${data.so_dien_thoai || ""}" style="display:inline-block;background:#8B6914;color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:8px;font-size:15px;font-weight:700;">
              📞 Gọi ngay cho ${firstName}
            </a>
          </td></tr>
        </table>

      </td></tr>

      <tr><td style="background:#f5f0e8;padding:18px 32px;text-align:center;border-top:1px solid #e0d9cc;">
        <p style="margin:0;font-size:12px;color:#888;">Email tự động từ hệ thống tư vấn nội thất FELISEDE. Vui lòng không trả lời trực tiếp.</p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body></html>`;

  const plainBody = [
    "YÊU CẦU TƯ VẤN MỚI",
    "Thời gian: " + ts,
    "",
    "THÔNG TIN KHÁCH HÀNG",
    "- Họ và tên: " + (data.ho_ten || "—"),
    "- Hồ sơ người sử dụng: " + (data.ho_so_nguoi_dung || "—"),
    "- Số điện thoại: " + (data.so_dien_thoai || "—"),
    "- Email: " + (data.email || "—"),
    "- Email hồ sơ: " + (data.email_ho_so || "—"),
    "- Địa chỉ thi công: " + (data.dia_chi || "—"),
    "- Diện tích: " + (data.dien_tich ? data.dien_tich + " m²" : "—"),
    "- Nguồn khách: " + (data.nguon_khach || "—"),
    "- Loại công trình: " + (data.loai_cong_trinh || "—"),
    "",
    "NGÂN SÁCH & TIẾN ĐỘ",
    "- Ngân sách: " + (data.ngan_sach || "—"),
    "- Ưu tiên phân bổ: " + (data.uu_tien_phan_bo || "—"),
    "- Mức hoàn thiện: " + (data.muc_hoan_thien || "—"),
    "- Thời gian thi công: " + (data.thoi_gian_thi_cong || "—"),
    "- Các mốc quan trọng: " + (data.cac_moc_quan_trong || "—"),
    "",
    "SỞ THÍCH & MONG MUỐN",
    "- Thói quen: " + (Array.isArray(data.thoi_quen) ? data.thoi_quen.join(", ") : (data.thoi_quen || "—")),
    "- Sở thích: " + (Array.isArray(data.so_thich) ? data.so_thich.join(", ") : (data.so_thich || "—")),
    "- Lý do xây dựng: " + (data.ly_do || "—"),
    "- Kỳ vọng: " + (Array.isArray(data.ky_vong) ? data.ky_vong.join(", ") : (data.ky_vong || "—")),
    "- Ưu tiên hàng đầu: " + (data.uu_tien || "—"),
    "- Phong cách yêu thích: " + (Array.isArray(data.phong_cach) ? data.phong_cach.join(", ") : (data.phong_cach || "—")),
    "- Colour combo: " + (Array.isArray(data.colour_combo) ? data.colour_combo.join(", ") : (data.colour_combo || "—")),
    "- Materials: " + formatMaterials(data.materials)
  ].join("\n");

  let pdfAttachments = [];
  try {
    pdfAttachments = [generateSubmissionPdf(data, imageLinks)];
  } catch (pdfErr) {
    console.warn("[PDF] Failed to generate:", pdfErr.message);
  }
  MailApp.sendEmail({ to: OWNER_EMAIL, subject: subject, htmlBody: htmlBody, body: plainBody, attachments: pdfAttachments });
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER
// ─────────────────────────────────────────────────────────────────────────────
function infoRow(label, value) {
  return `<tr>
    <td style="padding:5px 0;border-bottom:1px solid #f5f0e8;">
      <table width="100%" cellpadding="0" cellspacing="0"><tr>
        <td width="150" style="font-size:12px;color:#888;vertical-align:top;padding-right:10px;">${label}</td>
        <td style="font-size:13px;color:#1A1A1A;font-weight:500;vertical-align:top;">${value}</td>
      </tr></table>
    </td>
  </tr>`;
}

function generateSubmissionPdf(data, imageLinks) {
  const ts = data.timestamp
    ? Utilities.formatDate(new Date(data.timestamp), TIMEZONE, "dd/MM/yyyy HH:mm:ss")
    : Utilities.formatDate(new Date(), TIMEZONE, "dd/MM/yyyy HH:mm:ss");

  const doc  = DocumentApp.create("_temp_khaosat_" + (data.submission_id || Date.now()));
  const body = doc.getBody();
  body.setMarginTop(36).setMarginBottom(36).setMarginLeft(54).setMarginRight(54);

  function h1(text) {
    const p = body.appendParagraph(text);
    p.setHeading(DocumentApp.ParagraphHeading.HEADING1);
    p.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    p.editAsText().setForegroundColor("#8B6914");
  }
  function h2(text) {
    const p = body.appendParagraph(text);
    p.setHeading(DocumentApp.ParagraphHeading.HEADING2);
    p.editAsText().setForegroundColor("#5A3A0A");
  }
  function row(label, value) {
    if (!value && value !== 0) return;
    const lbl = label + ": ";
    const p = body.appendParagraph(lbl + String(value));
    p.editAsText().setBold(0, lbl.length - 1, true);
  }

  h1("FELISEDE – PHIEU KHAO SAT NOI THAT");
  body.appendParagraph("Thoi gian: " + ts).setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  body.appendHorizontalRule();

  h2("1. THONG TIN DU AN");
  row("Chu dau tu", data.chu_dau_tu || data.ho_ten || "");
  row("So dien thoai", data.so_dien_thoai || "");
  row("Email", data.email || "");
  row("Dia chi thi cong", data.dia_chi || "");
  row("Dien tich", data.dien_tich ? data.dien_tich + " m2" : "");
  row("Loai cong trinh", data.loai_cong_trinh || "");
  row("Nguon khach", data.nguon_khach || "");

  h2("2. HO SO NGUOI SU DUNG");
  row("Do tuoi, nghe nghiep", data.ho_so_nguoi_dung || "");
  row("Email ho so", data.email_ho_so || "");
  row("Thoi quen sinh hoat", Array.isArray(data.thoi_quen) ? data.thoi_quen.join(", ") : (data.thoi_quen || ""));
  row("So thich", Array.isArray(data.so_thich) ? data.so_thich.join(", ") : (data.so_thich || ""));

  h2("3. MUC TIEU & MONG MUON");
  row("Ly do xay dung", data.ly_do || "");
  row("Ky vong chinh", Array.isArray(data.ky_vong) ? data.ky_vong.join(", ") : (data.ky_vong || ""));
  row("Uu tien hang dau", data.uu_tien || "");

  const rooms = Array.isArray(data.rooms) ? data.rooms : [];
  h2("4. PHONG THIET KE (" + rooms.length + " phong)");
  rooms.forEach(function(r, i) {
    const rp = body.appendParagraph("  " + (i + 1) + ". " + (r.room || ""));
    rp.editAsText().setBold(true);
    if (r.dien_tich) body.appendParagraph("     Dien tich: " + r.dien_tich + " m2");
    const yeuCau = Array.isArray(r.yeu_cau) ? r.yeu_cau.join(", ") : (r.yeu_cau || "");
    if (yeuCau) body.appendParagraph("     Yeu cau: " + yeuCau);
    if (r.ghi_chu) body.appendParagraph("     Ghi chu: " + r.ghi_chu);
  });

  h2("5. PHONG CACH & MAU SAC");
  const stylesArr = Array.isArray(data.design_styles) ? data.design_styles
    : (Array.isArray(data.phong_cach) ? data.phong_cach : []);
  row("Phong cach ua thich", stylesArr.join(", "));
  const combos = Array.isArray(data.colour_combo) ? data.colour_combo : [];
  combos.forEach(function(c) { body.appendParagraph("  - " + c); });

  h2("6. VAT LIEU UU TIEN");
  if (data.materials && typeof data.materials === "object" && !Array.isArray(data.materials)) {
    Object.keys(data.materials).forEach(function(cat) {
      const vals = Array.isArray(data.materials[cat]) ? data.materials[cat] : [String(data.materials[cat] || "")];
      row(cat, vals.join(", "));
    });
  }

  h2("7. KHAO SAT THEM");
  row("Ngan sach du kien", data.ngan_sach || "");
  row("Uu tien phan bo", data.uu_tien_phan_bo || "");
  row("Muc hoan thien", data.muc_hoan_thien || "");
  row("Thoi gian hoan thanh", data.thoi_gian_thi_cong || "");
  row("Moc thoi gian quan trong", data.cac_moc_quan_trong || "");
  row("Phong cach mong muon", data.khao_sat_phong_cach || "");
  row("Ghet dieu gi trong khong gian", data.khao_sat_khong_gian || "");
  row("Yeu cau dac biet", data.yeu_cau_dac_biet || "");

  if (imageLinks && imageLinks.length) {
    h2("8. ANH PHONG CACH THAM KHAO");
    imageLinks.forEach(function(l) {
      body.appendParagraph("  - " + (l.filename || "") + ": " + (l.url || ""));
    });
  }

  doc.saveAndClose();

  const file    = DriveApp.getFileById(doc.getId());
  const pdfBlob = file.getAs(MimeType.PDF);
  const safeName = (data.ho_ten || "KhachHang").replace(/[\/\\:*?"<>|]/g, "_");
  pdfBlob.setName("FELISEDE_KhaoSat_" + safeName + ".pdf");
  file.setTrashed(true);

  return pdfBlob;
}

function formatMaterials(materials) {
  if (!materials) return "";
  if (typeof materials === "string") return materials;
  if (Array.isArray(materials)) return materials.join(", ");
  if (typeof materials !== "object") return String(materials);

  return Object.keys(materials).map(function(cat) {
    const vals = Array.isArray(materials[cat]) ? materials[cat] : [String(materials[cat] || "")];
    return "- " + cat + ": \n" + vals.map(function(v, i) {
      return v + (i < vals.length - 1 ? "," : "");
    }).join("\n");
  }).join("\n\n");
}

function formatListField(label, arr) {
  if (!Array.isArray(arr) || !arr.length) return "";
  if (arr.length === 1) return label + arr[0];
  return label + "\n" + arr.map(function(item, idx) {
    return "- " + item + (idx < arr.length - 1 ? "," : "");
  }).join("\n");
}

function applyColumnWidths(sheet, headers) {
  const widths = [130, 220, 220, 220, 180, 300, 200, 260, 260, 220];
  const normHeaders = headers.map(normalizeHeaderKey);
  SHEET_HEADERS.forEach(function(name, i) {
    const colIdx = normHeaders.indexOf(normalizeHeaderKey(name));
    if (colIdx >= 0 && widths[i]) sheet.setColumnWidth(colIdx + 1, widths[i]);
  });
}

function warnMissingMappings(data) {
  if (!data) return;
  const payloadKeys = Object.keys(data);
  const missing = payloadKeys.filter(function(key) {
    return !PAYLOAD_TO_COLUMNS[key];
  });
  if (missing.length) {
    console.warn("[saveToSheet] Missing mapping:", missing.join(", "));
  }
}

function listToString(value, separator) {
  if (Array.isArray(value)) return value.join(separator);
  if (typeof value === "string") return value;
  return value ? String(value) : "";
}

function ensureSheetHeaders(sheet) {
  const lastColumn = sheet.getLastColumn();
  let headers = [];
  if (lastColumn > 0) {
    headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  }
  const hasHeaderContent = headers.some(function(value) {
    return String(value || "").trim() !== "";
  });

  if (hasHeaderContent) {
    headers = headers.map(function(value) { return value || ""; });
    const normalizedExisting = headers.map(normalizeHeaderKey);
    const allRequired = SHEET_HEADERS.concat(EXTRA_DISPLAY_HEADERS.filter(function(name) {
      return SHEET_HEADERS.indexOf(name) === -1;
    }));
    const missingHeaders = allRequired.filter(function(name) {
      return normalizedExisting.indexOf(normalizeHeaderKey(name)) === -1;
    });
    if (missingHeaders.length) {
      const currentColumns = sheet.getLastColumn();
      if (currentColumns < headers.length + missingHeaders.length) {
        const toAdd = headers.length + missingHeaders.length - currentColumns;
        sheet.insertColumnsAfter(currentColumns || 1, toAdd);
      }
      const startCol = headers.length + 1;
      sheet.getRange(1, startCol, 1, missingHeaders.length).setValues([missingHeaders]);
      headers = headers.concat(missingHeaders);
    }
    return headers;
  }

  if (SHEET_HEADERS.length) {
    const range = sheet.getRange(1, 1, 1, SHEET_HEADERS.length);
    range.setValues([SHEET_HEADERS]);
    range.setBackground("#8B6914");
    range.setFontColor("#ffffff");
    range.setFontWeight("bold");
    range.setFontSize(11);
    sheet.setFrozenRows(1);
    return SHEET_HEADERS.slice();
  }

  return headers;
}

function normalizeHeaderKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function assignHeaderValue(target, aliases, value) {
  if (!aliases || !aliases.length) return;
  const formattedValue = formatValueForSheet(value);
  aliases.forEach(function(alias) {
    const key = normalizeHeaderKey(alias);
    if (!key) return;
    target[key] = formattedValue;
  });
}

function resolveHeaderValue(headerName, valueMap, data) {
  const normalized = normalizeHeaderKey(headerName);
  if (Object.prototype.hasOwnProperty.call(valueMap, normalized)) {
    return valueMap[normalized];
  }

  const rawHeader = String(headerName || "").trim();
  const candidates = [
    rawHeader,
    rawHeader.replace(/\s+/g, "_"),
    normalized,
    normalized.replace(/\s+/g, "_"),
    normalized.replace(/\s+/g, "")
  ].filter(Boolean);

  for (var i = 0; i < candidates.length; i++) {
    const key = candidates[i];
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      return formatValueForSheet(data[key]);
    }
  }

  return "";
}

function formatValueForSheet(value) {
  if (value === null || value === undefined) return "";
  if (Array.isArray(value)) return value.join(" | ");
  if (typeof value === "object") return JSON.stringify(value, null, 2);
  return value;
}

function formatRoomDetailsReadable(rooms) {
  if (!Array.isArray(rooms) || !rooms.length) return "";
  return rooms.map(function(room, idx) {
    var lines = [];
    const roomName = room.room || "Phòng";
    lines.push((idx + 1) + ". " + roomName);
    if (room.dien_tich) lines.push("- Diện tích: " + room.dien_tich + " m²");
    const yeuCau = Array.isArray(room.yeu_cau) ? room.yeu_cau.join(", ") : (room.yeu_cau || "");
    if (yeuCau) lines.push("- Yêu cầu: " + yeuCau);
    const vatLieu = Array.isArray(room.vat_lieu) ? room.vat_lieu.join(", ") : (room.vat_lieu || "");
    if (vatLieu) lines.push("- Vật liệu: " + vatLieu);
    if (room.yeu_cau_khac) lines.push("- Ghi chú: " + room.yeu_cau_khac);
    return lines.join("\n");
  }).join("\n\n");
}

function joinNonEmptyParts(parts) {
  return (parts || []).filter(function(part) {
    return part && String(part).trim() !== "";
  }).join("\n\n");
}
