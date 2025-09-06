import { getTranslations } from 'next-intl/server';
import ToolContainer from './tool-container';
import ToolContent from './tool-content';
import ToolHeader from './tool-header';

export default async function Tool() {
  const t = await getTranslations('HomePage');

  return (
    <ToolContainer>
      <ToolHeader />
      <ToolContent />
    </ToolContainer>
  );
}
