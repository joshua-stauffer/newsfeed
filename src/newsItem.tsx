import { NewsItemContainer, NewsValContainer } from './style';

interface NewsItemProps {
  val: number;
}

export const NewsItem = ({ val }: NewsItemProps) => {

  return (
    <NewsItemContainer>
      <NewsValContainer>
        {val}
      </NewsValContainer>
    </NewsItemContainer>
  )
}