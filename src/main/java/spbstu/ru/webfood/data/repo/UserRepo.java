package spbstu.ru.webfood.data.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import spbstu.ru.webfood.user.User;

public interface UserRepo extends JpaRepository<User, Long> {
}
