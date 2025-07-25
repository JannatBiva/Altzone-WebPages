'use client';
import { SectionLeaderboard } from '@/widgets/SectionLeaderboard';
import { LeaderboardItem } from '@/entities/Leaderboard/types/leaderboard';
import { useGetTopClansQuery } from '@/shared/api/leaderboardApi';
import { useClientTranslation } from '@/shared/i18n';

const LeaderboardClans = () => {
  const { t } = useClientTranslation('leaderboard');
  const { data, isLoading, error } = useGetTopClansQuery();

  return (
    <SectionLeaderboard
      leaderboard1={
        data?.data.Clan
          ? {
              title: t('wins'),
              leaders: data.data.Clan as LeaderboardItem[],
              path: '/clans',
            }
          : undefined
      }
    />
  );
};

export default LeaderboardClans;
