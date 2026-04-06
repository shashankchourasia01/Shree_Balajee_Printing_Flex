// src/components/ProjectSkeleton.jsx

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ProjectCardSkeleton = () => (
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
    {/* Image area */}
    <Skeleton height={144} />

    {/* Content area */}
    <div className="p-3 sm:p-4">
      <Skeleton width="65%" height={14} style={{ marginBottom: 6 }} />
      <Skeleton width="100%" height={11} style={{ marginBottom: 4 }} />
      <Skeleton width="75%" height={11} />
    </div>

    {/* CTA area */}
    <div className="px-3 sm:px-4 pb-3">
      <Skeleton width={70} height={11} />
    </div>
  </div>
);

const ProjectSkeleton = ({ count = 8 }) => (
  <SkeletonTheme baseColor="#e2e8f0" highlightColor="#f1f5f9">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
      {Array(count).fill(null).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  </SkeletonTheme>
);

export default ProjectSkeleton;