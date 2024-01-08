export const handleRouter = (background, routerLink) => {
  background.classList.add('active');
  const router = useRouter();
  if (routerLink) {
    setTimeout(() => {
      router.push(routerLink);
    }, 600)
  }
}
