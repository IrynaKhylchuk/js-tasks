//! Implement the PrintMashine class, which consists of:
//! font size;
//! font color;
//! font family;
//! the print() method, which accepts text and prints it in the appropriate font using document.write().

class PrintMashine {
  constructor(fontSize, fontColor, fontFamily) {
    this.fontSize = fontSize;
    this.fontColor = fontColor;
    this.fontFamily = fontFamily;
  }

  print(text) {
    const style = `font-size: ${this.fontSize}; color: ${this.fontColor}; font-family: ${this.fontFamily}`;
    document.write(`<p style="${style}">${text}</p>`);
  }
}

const test = new PrintMashine("30px", "green", "Calibri");
test.print("Hello, world!");

//! Implement a class that describes the news (headline, text, array tags, publication date).
//! One method must be implemented in the class print, which displays all information.
//! Note how the date is displayed:
//! if less than a day has passed since the publication date, it is displayed "today";
//! if less than a week has passed since the publication date, then "N days ago" is displayed;
//! in other cases - the full date in the format "day.month.year".

class News {
  constructor(headline, publicationDate, text, tagsArr) {
    this.headline = headline;
    this.publicationDate = new Date(publicationDate);
    this.text = text;
    this.tagsArr = tagsArr;
  }

  formatDate() {
    const today = new Date();
    const differenceInDays = Math.floor(
      (today - this.publicationDate) / (1000 * 60 * 60 * 24)
    );

    if (differenceInDays < 1) {
      return "today";
    } else if (differenceInDays < 7) {
      return `${differenceInDays} days ago`;
    } else {
      const day = this.publicationDate.getDate().toString().padStart(2, "0");
      const month = (this.publicationDate.getMonth() + 1)
        .toString()
        .padStart(2, "0");
      const year = this.publicationDate.getFullYear();
      return `${day}.${month}.${year}`;
    }
  }

  print() {
    const formattedTags = this.tagsArr.map((tag) => `#${tag}`).join(" ");

    document.write(`<h1>${this.headline}</h1>`);
    document.write(`<span>${this.formatDate()}</span>`);
    document.write(`<p>${this.text}</p>`);
    document.write(`<p>${formattedTags}</p>`);
  }
}

const news = new News(
  "What is Lorem Ipsum",
  "2023-06-13T10:00:00",
  "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.",
  ["lorem", "ipsum", "text"]
);

news.print();

//! Implement a class that describes a news feed.
//! The class must contain:
//! array of news;
//! get-property, which returns the number of news;
//! the method of displaying all news on the screen;
//! method of adding news;
//! method of deleting news;
//! method of sorting news by date (from the latest news to the oldest);
//! method of searching for news by tag (returns an array of news containing the tag passed to the method).

class NewsFeed {
  constructor(newsArr = []) {
    this.newsArr = newsArr;
  }

  formatDate(date) {
    const currentDate = new Date();
    const newsDate = new Date(date);
    const diffInMs = currentDate - newsDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays < 1) {
      return "today";
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else {
      const day = newsDate.getDate().toString().padStart(2, "0");
      const month = (newsDate.getMonth() + 1).toString().padStart(2, "0");
      const year = newsDate.getFullYear();
      return `${day}.${month}.${year}`;
    }
  }

  get count() {
    return this.newsArr.length;
  }

  print() {
    this.newsArr.forEach((news) => {
      const formattedTags = news.tags.map((tag) => `#${tag}`).join(" ");

      document.write(`<h1>${news.headline}</h1>`);
      document.write(`<span>${this.formatDate(news.date)}</span>`);
      document.write(`<p>${news.text}</p>`);
      document.write(`<p>${formattedTags}</p>`);
    });
  }

  add(headline, date, text, tags) {
    const newsArticle = {
      headline,
      date: new Date(date),
      text,
      tags,
    };
    this.newsArr.push(newsArticle);
  }

  delete(index) {
    if (index >= 0 && index < this.newsArr.length) {
      this.newsArr.splice(index, 1);
    }
  }

  sortByDate() {
    this.newsArr.sort((a, b) => b.date - a.date);
  }

  searchByTag(tag) {
    return this.newsArr.filter((news) => news.tags.includes(tag));
  }
}

const newsFeed = new NewsFeed();

newsFeed.add(
  "Important Update",
  "2023-06-10T09:00:00",
  "Details of an important update.",
  ["update", "important"]
);
newsFeed.add(
  "Breaking News 1",
  "2023-06-13T10:00:00",
  "Text of breaking news 1.",
  ["news", "breaking", "today"]
);
newsFeed.add(
  "Breaking News 2",
  "2023-06-12T15:30:00",
  "Text of breaking news 2.",
  ["news", "breaking", "yesterday"]
);

document.write(`<p>Number of news: ${newsFeed.count}</p>`);

newsFeed.print();

newsFeed.delete(2);

newsFeed.sortByDate();

newsFeed.print();

const newsWithTagBreaking = newsFeed.searchByTag("breaking");
console.log("News with tag 'breaking':", newsWithTagBreaking);
