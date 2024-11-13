export const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="text-2xl sm:text-4xl text-center  font-bold mb-2  text-[var(--primary-title)]">
      {title}
    </h2>
  );
};

export const SubTitle = ({ title }: { title: string }) => {
  return (
    <h3 className="text-lg sm:text-2xl text-center font-medium mb-4 text-[var(--secondary-text)]">
      {title}
    </h3>
  );
};
