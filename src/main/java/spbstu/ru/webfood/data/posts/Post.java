package spbstu.ru.webfood.data.posts;


import spbstu.ru.webfood.user.User;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "posts")
public class Post {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String Name;

    @Column(name = "description")
    private String Description;

    @Column(name = "published")
    private Date published;

    @Column(name = "address")
    private String address;

    @Column(name = "status")
    @Enumerated(EnumType.ORDINAL)
    private Status status;

    @Column(name = "image_path")
    private String imagePath;

    @Column(name = "category")
    @Enumerated(EnumType.ORDINAL)
    private PostCategory category;

    @ManyToOne(fetch = FetchType.EAGER,
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name = "owner_id")
    private User owner;

    public Post() {
    }

    public Post(Long id, String name, String description, Date published,
                String address, Status status, String imagePath, PostCategory
                        category, User owner) {
        this.id = id;
        Name = name;
        Description = description;
        this.published = published;
        this.address = address;
        this.status = status;
        this.imagePath = imagePath;
        this.category = category;
        this.owner = owner;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public Date getPublished() {
        return published;
    }

    public void setPublished(Date published) {
        this.published = published;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public PostCategory getCategory() {
        return category;
    }

    public void setCategory(PostCategory category) {
        this.category = category;
    }

//    public User getOwner() {
//        return owner;
//    }

    public void setOwner(User owner) {
        this.owner = owner;
    }
}
