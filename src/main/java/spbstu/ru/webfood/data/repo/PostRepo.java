package spbstu.ru.webfood.data.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import spbstu.ru.webfood.data.posts.Post;
import spbstu.ru.webfood.data.posts.PostCategory;

import java.util.List;

public interface PostRepo extends JpaRepository<Post, Long> {
    public List<Post> findByCategoryIs(PostCategory category);
}
