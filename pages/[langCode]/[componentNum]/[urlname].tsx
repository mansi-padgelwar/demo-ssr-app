// pages/[langCode]/[componentNum]/[urlname].js
import mockData from "../../../mockData";

interface ComponentPageProps {
  data: {
    htmlContent: string;
  };
}

const ComponentPage: React.FC<ComponentPageProps> = ({ data,  }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data?.htmlContent || "" }}></div>
    </div>
  );
};

export default ComponentPage;

export async function getServerSideProps(context: {
  params: { langCode: string; componentNum: string; urlname: string };
}) {
  const { langCode, componentNum, urlname } = context.params;

  const data = (mockData as Record<string, any>)[langCode]?.[componentNum]?.[urlname] || {};

  return {
    props: { data },
  };
}
