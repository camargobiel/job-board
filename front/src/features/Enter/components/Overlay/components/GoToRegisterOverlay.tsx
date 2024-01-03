interface ToggleProps {
  toggle: () => void;
}

export const GoToRegisterOverlay = ({ toggle }: ToggleProps) => {
  return (
    <section className="flex flex-col justify-center items-center w-96 h-96 bg-red-400">
      <h2>Não possui conta?</h2>
      <button
        onClick={toggle}
      >
        Clique aqui para criar agora!
      </button>
    </section>
  );
};
