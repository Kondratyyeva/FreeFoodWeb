package spbstu.ru.webfood.service;

import org.springframework.stereotype.Service;
import spbstu.ru.webfood.data.posts.Post;
import spbstu.ru.webfood.data.posts.PostCategory;
import spbstu.ru.webfood.data.posts.Status;
import spbstu.ru.webfood.data.repo.PostRepo;
import spbstu.ru.webfood.data.repo.UserRepo;
import spbstu.ru.webfood.user.User;

import java.util.List;

@Service
public class UserService {
    private UserRepo userRepo;
    private PostRepo postRepo;

    public UserService(UserRepo userRepo, PostRepo postRepo) {
        this.userRepo = userRepo;
        this.postRepo = postRepo;
    }

    public User getUserById(Long id){
        return userRepo.getById(id);
    }

    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    public List<Post> getUserPosts(long id){
        return getUserById(id).getPosts();
    }

    public List<Post> getPostsByCategory(PostCategory category){
        return postRepo.findByCategoryIs(category);
    }

    public List<Post> getAllPosts(PostCategory category){
        return postRepo.findAll();
    }

    public Post setPostStatus(Post post, Status status){
        post.setStatus(status);
        return postRepo.saveAndFlush(post);
    }

    public Post getPostById(Long id){
        return postRepo.getById(id);
    }
}
