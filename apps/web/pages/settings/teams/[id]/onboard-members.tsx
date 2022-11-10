import Head from "next/head";

import AddNewTeamMembers from "@calcom/features/ee/teams/components/AddNewTeamMembers";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import WizardLayout from "@calcom/ui/v2/core/layouts/WizardLayout";

const OnboardTeamMembersPage = () => {
  const { t } = useLocale();
  return (
    <>
      <Head>
        <title>{t("add_team_members")}</title>
        <meta name="description" content={t("add_team_members_description")} />
      </Head>
      <AddNewTeamMembers />
    </>
  );
};

OnboardTeamMembersPage.getLayout = (page: React.ReactElement) => (
  <WizardLayout currentStep={1} maxSteps={3}>
    {page}
  </WizardLayout>
);

export default OnboardTeamMembersPage;