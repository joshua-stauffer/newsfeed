import { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { FeedContainer } from './style';
import { NewsItem } from './newsItem';

export const NewsFeed = () => {
  const [list, setList] = useState(Array.from(Array(20).keys(), n => n + 111))
  const feedEl = useRef<HTMLDivElement>(null)
  const loadNextOffset = 1000; // number of pixels left to scroll when triggering load

  useEffect(() => {
    // ensure we always start in the middle of the feed
    if (feedEl.current) {
      feedEl.current.scrollTo(0, feedEl.current.scrollHeight / 2)
    }
  }, [])

  useLayoutEffect(() => {
    const scrollEffect = (e: any) => {
      if (!feedEl.current) return;
      const scrollTop = feedEl.current.scrollTop;
      const scrollHeight = feedEl.current.scrollHeight;
      const offsetHeight = feedEl.current.offsetHeight;
      // Are we within loadNextOffset pixels of the beginning?
      if (scrollTop < loadNextOffset) {
        // remember where we are in the feed
        const lastPos = scrollTop
        const lastHeight = scrollHeight
        // add elements to beginning
        setList((dataList) => {
          const lowestNumber = dataList[0];
          const startNumber = lowestNumber - 10
          const newArray = Array.from(Array(10).keys(), n => n + startNumber)
          return [...newArray, ...dataList]
        })
        // ensure that we are scrolled to the same location as before the add
        const newHeight = feedEl.current.scrollHeight;
        const scrollOffset = newHeight - lastHeight;
        feedEl.current.scrollTo(0, lastPos + scrollOffset)
      }
      // Are we within loadNextOffset pixels of the end?
      if ((scrollTop + offsetHeight) > (scrollHeight - loadNextOffset)) {
        // add elements to end
        setList((dataList) => {
          const highestNumber = dataList[dataList.length - 1];
          const startNumber = highestNumber + 1
          const newArray = Array.from(Array(10).keys(), n => n + startNumber)
          return [...dataList, ...newArray]
        })
        // no need to adjust position, because we're adding to the end
      }
    }

    window.addEventListener('scroll', scrollEffect, true)
    return () => window.removeEventListener('scroll', scrollEffect, true)
    }
  )
  
  return (
    <FeedContainer ref={feedEl}>
      {
        list.map(n => <NewsItem val={n} key={n}/>)
      }
    </FeedContainer>
  )
}
