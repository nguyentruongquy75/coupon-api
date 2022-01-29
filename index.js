const cheerio = require("cheerio");
const request = require("request-promise");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/tiki", (req, res) => {
  request("https://magiamgia.com/tiki/").then((html) => {
    const $ = cheerio.load(html);
    const result = $("#polyxgo_offers_flexible")
      .first()
      .find(".offers-details")
      .map((index, ele) => {
        const discount = $(ele)
          .find(".mgg-discount")
          .text()
          .slice(0, $(ele).find(".mgg-discount").text().indexOf("<"));
        const logo =
          "https://epz24x4zq6r.exactdn.com/wp-content/uploads/2020/12/ma-giam-gia-tiki.png?strip=all&lossy=1&w=1125&ssl=1";
        const info = $(ele).find(".polyxgo_title").html();
        const code = $(ele).find(".vc-mgg").text();
        const link = $(ele).find(".cp-mgg").attr("onclick");

        return {
          discount,
          logo,
          info,
          code,
          link: link && link.slice(link.indexOf("http"), link.indexOf("')")),
        };
      })
      .toArray();

    res.json(result);
  });
});

app.get("/lazada", (req, res) => {
  request("https://magiamgia.com/lazada/").then((html) => {
    const $ = cheerio.load(html);

    const result = $("#polyxgo_offers_flexible")
      .first()
      .find(".offers-details")
      .map((index, ele) => {
        const discount = $(ele)
          .find(".mgg-discount")
          .text()
          .slice(0, $(ele).find(".mgg-discount").text().indexOf("<"));
        const logo =
          "https://epz24x4zq6r.exactdn.com/wp-content/uploads/2020/12/ma-giam-gia-lazada.png?strip=all&lossy=1&w=1125&ssl=1";
        const info = $(ele).find(".polyxgo_title").html();
        const code = $(ele).find(".vc-mgg").text();
        const link = $(ele).find(".cp-mgg").attr("onclick");

        return {
          discount,
          logo,
          info,
          code,
          link: link && link.slice(link.indexOf("http"), link.indexOf("')")),
        };
      })
      .toArray();

    res.json(result);
  });
});

app.get("/sendo", (req, res) => {
  request("https://magiamgia.com/sendo/").then((html) => {
    const $ = cheerio.load(html);

    const result = $("#polyxgo_offers_flexible")
      .first()
      .find(".offers-details")
      .map((index, ele) => {
        const discount = $(ele)
          .find(".mgg-discount")
          .text()
          .slice(0, $(ele).find(".mgg-discount").text().indexOf("<"));
        const logo =
          "https://epz24x4zq6r.exactdn.com/wp-content/uploads/2021/01/ma-giam-gia-sendo.png?strip=all&lossy=1&w=1125&ssl=1";
        const info = $(ele).find(".polyxgo_title").html();
        const code = $(ele).find(".vc-mgg").text();
        const link = $(ele).find(".cp-mgg").attr("onclick");

        return {
          discount,
          logo,
          info,
          code,
          link: link && link.slice(link.indexOf("http"), link.indexOf("')")),
        };
      })
      .toArray();

    res.json(result);
  });
});

app.get("/now", (req, res) => {
  request("https://bloggiamgia.vn/ma-giam-gia/now/").then((html) => {
    const $ = cheerio.load(html);

    const result = $("#polyxgo_offers_flexible")
      .first()
      .find(".offers-details")
      .map((index, ele) => {
        const discount = $(ele)
          .find(".mgg-discount")
          .text()
          .slice(0, $(ele).find(".mgg-discount").text().indexOf("<"));
        const logo =
          "https://eu94j8zj53i.exactdn.com/wp-content/uploads/2021/12/logo-shopeefood.png?strip=all&lossy=1&w=840&ssl=1";
        const ngayHetHan = $(ele)
          .find(".polyxgo_hethan")
          .text()
          .slice($(ele).find(".polyxgo_hethan").text().indexOf(":") + 2);
        const info =
          $(ele).find(".polyxgo_title").html() +
          `<div><span class="polyxgo_bold"> Ngày hết hạn:</span> ${ngayHetHan}</div>`;
        const code = $(ele).find(".vc-mgg").text();
        const link = $(ele).find(".cp-mgg").attr("onclick");

        return {
          discount,
          logo,
          info,
          code,
          link: link && link.slice(link.indexOf("http"), link.indexOf("')")),
        };
      })
      .toArray();

    res.json(result);
  });
});

app.get("/grab", (req, res) => {
  request("https://bloggiamgia.vn/ma-giam-gia/grab/").then((html) => {
    const $ = cheerio.load(html);

    const result = $("#polyxgo_offers_flexible")
      .first()
      .find(".offers-details")
      .map((index, ele) => {
        const discount = $(ele)
          .find(".mgg-discount")
          .text()
          .slice(0, $(ele).find(".mgg-discount").text().indexOf("<"));
        const logo =
          "https://eu94j8zj53i.exactdn.com/wp-content/uploads/2021/03/logo-grabmart-1.png?strip=all&lossy=1&w=840&ssl=1";
        const ngayHetHan = $(ele)
          .find(".polyxgo_hethan")
          .text()
          .slice($(ele).find(".polyxgo_hethan").text().indexOf(":") + 2);
        const info =
          $(ele).find(".polyxgo_title").html() +
          `<div><span class="polyxgo_bold"> Ngày hết hạn:</span> ${ngayHetHan}</div>`;
        const code = $(ele).find(".vc-mgg").text();
        const link = $(ele).find(".cp-mgg").attr("onclick");

        return {
          discount,
          logo,
          info,
          code,
          link: link && link.slice(link.indexOf("http"), link.indexOf("')")),
        };
      })
      .toArray();

    res.json(result);
  });
});

app.get("/mytour", (req, res) => {
  request("https://bloggiamgia.vn/ma-giam-gia/mytour/").then((html) => {
    const $ = cheerio.load(html);

    const result = $("#polyxgo_offers_flexible")
      .first()
      .find(".offers-details")
      .map((index, ele) => {
        const discount = $(ele)
          .find(".mgg-discount")
          .text()
          .slice(0, $(ele).find(".mgg-discount").text().indexOf("<"));
        const logo =
          "https://eu94j8zj53i.exactdn.com/wp-content/uploads/2020/04/logo-mytour.png?strip=all&lossy=1&w=840&ssl=1";
        const ngayHetHan = $(ele)
          .find(".polyxgo_hethan")
          .text()
          .slice($(ele).find(".polyxgo_hethan").text().indexOf(":") + 2);
        const info =
          $(ele).find(".polyxgo_title").html() +
          `<div><span class="polyxgo_bold"> Ngày hết hạn:</span> ${ngayHetHan}</div>`;
        const code = $(ele).find(".vc-mgg").text();
        const link = $(ele).find(".cp-mgg").attr("onclick");

        return {
          discount,
          logo,
          info,
          code,
          link: link && link.slice(link.indexOf("http"), link.indexOf("')")),
        };
      })
      .toArray();

    res.json(result);
  });
});

app.get("/traveloka", (req, res) => {
  request("https://bloggiamgia.vn/ma-giam-gia/traveloka/").then((html) => {
    const $ = cheerio.load(html);

    const result = $("#polyxgo_offers_flexible")
      .first()
      .find(".offers-details")
      .map((index, ele) => {
        const discount = $(ele)
          .find(".mgg-discount")
          .text()
          .slice(0, $(ele).find(".mgg-discount").text().indexOf("<"));
        const logo =
          "https://eu94j8zj53i.exactdn.com/wp-content/uploads/2020/04/logo-traveloka.png?strip=all&lossy=1&w=840&ssl=1";
        const ngayHetHan = $(ele)
          .find(".polyxgo_hethan")
          .text()
          .slice($(ele).find(".polyxgo_hethan").text().indexOf(":") + 2);
        const info =
          $(ele).find(".polyxgo_title").html() +
          `<div><span class="polyxgo_bold"> Ngày hết hạn:</span> ${ngayHetHan}</div>`;
        const code = $(ele).find(".vc-mgg").text();
        const link = $(ele).find(".cp-mgg").attr("onclick");

        return {
          discount,
          logo,
          info,
          code,
          link: link && link.slice(link.indexOf("http"), link.indexOf("')")),
        };
      })
      .toArray();

    res.json(result);
  });
});

app.listen(process.env.PORT || 3000);
