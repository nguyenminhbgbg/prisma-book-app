const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      password: '123456',
      name: 'Alice',
    },
  })
  const genres1 = await prisma.Genre.upsert({
    where: { name: 'Maureen Child' },
    update: {},
    create: {
      name: 'Maureen Child',
      description: 'Maureen Child sinh ngày 28 tháng 9 năm 1951 tại Miền Nam California, Hoa Kỳ. Maureen Child là tác giả của hơn 130 tiểu thuyết và tiểu thuyết lãng mạn thường xuyên xuất hiện trong danh sách bán chạy nhất và đã giành được nhiều giải thưởng, bao gồm cả Giải thưởng Lựa chọn của Độc giả Quốc gia. Bà viết và đã xuất bản ở nhiều thể loại khác nhau, bao gồm cả lãng mạn lịch sử, huyền bí và đương đại.',
    },
  })
  const genres2 = await prisma.Genre.upsert({
    where: { name: 'Debra Mullins' },
    update: {},
    create: {
      name: 'Debra Mullins',
      description: 'Sinh ra tại thành phố New York, bắt đầu sự nghiệp văn chương từ khi còn rất trẻ. Debra Mullins là tác giả của nhiều mối tình huyền bí lịch sử và đương đại trong tiểu thuyết. Bà đã được đề cử cho nhiều giải thưởng, bao gồm Giải thưởng do độc giả quốc gia bình chọn, Huy chương Holt và Nhà văn lãng mạn của Trái tim vàng danh giá của Mỹ và các giải thưởng RITA. Năm 2003, bà là người chiến thắng Giải thưởng Leaf cho Phim lịch sử hay nhất với bộ phim lãng mạn Regency, A Necessary Bride.',
    },
  })

  const bob = await prisma.Book.upsert({
    where: { bookName: 'Other Words For Homee' },
    update: {},
    create: {
      bookName: 'Other Words For Homee',
      author: 'Jasmine Wargaaa',
      description: 'Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of Middle Eastern, an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.',
      rating: '4.5',
      language: 'Eng',
      readed: '12k',
      backgroundColor: 'rgba(247,239,219,0.9)',
      navTintColor: '#000',
      genre: 'Adventure',
      pageNo: '341',
      completion: '0%',
      lastRead: '0h',
      bookCover:'',
      Chapters: {
        create: [
          {
            chapterName: 'Crock Pot Roast 1',
            content: 'Debra Mullins AO (born 12 February 1957) is justice of the Supreme Court of Queensland in the Trial Division. She has served on the court since 2000 and was',
            NumberChapter: '1',
          },
          {
            chapterName: 'Crock Pot Roast 2',
            content: 'Debra Mullins AO (born 12 February 1957) is justice of the Supreme Court of Queensland in the Trial Division. She has served on the court since 2000 and was',
            NumberChapter: '2',
          },
          {
            chapterName: 'Crock Pot Roast 3',
            content: 'Debra Mullins AO (born 12 February 1957) is justice of the Supreme Court of Queensland in the Trial Division. She has served on the court since 2000 and was',
            NumberChapter: '3',
          },
        ],
      },
    },
  })
  console.log({ alice, genres1, genres2, bob })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })